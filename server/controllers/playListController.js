const { PlayList } = require("../models/models");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class PlayListController {
  async create(req, res) {
    try {
        let authorization = req.headers.authorization.split(" ")[1],
        decoded;
          try {
              decoded = jwt.verify(authorization, process.env.SECRET_KEY);
          } catch (e) {
              return res.status(401).send("unauthorized");
          }
          const id_user = decoded.id
      const { name } = req.body;
      const playList = await PlayList.create({ name:name , userId:id_user });
      res.json(playList);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req, res) {
    const playList = await PlayList.findAll();
    return res.json(playList);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const playList = await PlayList.findOne({ where: { id } });
    return res.json(playList);
  }

  async deletePlayList(req, res) {
    const { id } = req.params;
    try {
      const playList = await PlayList.findOne({ where: { id } });

      await playList.destroy();

      return res.json({ message: "PlayList deleted" });
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }
}

module.exports = new PlayListController();
