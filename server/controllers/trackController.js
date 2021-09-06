const { Track } = require("../models/models");
// const ApiError = require("../error/ApiError")
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mm = require('music-metadata');
// eslint-disable-next-line no-unused-vars
const util = require('util');


class TrackController{
    async  create(req,res){
        try{
          let authorization = req.headers.authorization.split(" ")[1],
          decoded;
            try {
                decoded = jwt.verify(authorization, process.env.SECRET_KEY);
            } catch (e) {
                return res.status(401).send("unauthorized");
            }
          const metadata = await mm.parseFile(`./song/${req.file.filename}`);
          const format = metadata.common.picture[0].format
          const data = metadata.common.picture[0].data
          const img_base64 = `data:${format};base64,${Buffer.from(data).toString('base64')}`
            const id_user = decoded.id
          console.log(req)
            const{ filename } =req.file
            const track = await Track.create({ name:filename ,userId:id_user ,img:img_base64 })
            return res.json(track)
        }catch(e){
            console.log(e)
        }

    }
    async getAll(req,res){
      let authorization = req.headers.authorization.split(" ")[1],
      decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (e) {
            return res.status(401).send("unauthorized");
        }
      const id_user = decoded.id
      const Ownertracks = await Track.findAll({ where:{  userId:id_user } })
      const Publictracks = await Track.findAll({ where:{  closed:false } })
        const tracks = await Track.findAll()
        return res.json({ tracks , Ownertracks ,Publictracks})
    }
    async getChangeClosed(req,res){
        const { id } = req.params
        const { status } = req.body
        console.log(status)
        const track = await Track.update({ closed: status }, {
          where: {
            id: id,
          },
        });
        return res.json({ message:`id${track} good job ` })
    }


  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const track = await Track.findOne({ where: { id } });

      await track.destroy();

      return res.json({ message: "track deleted" });
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }
}

module.exports = new TrackController();
