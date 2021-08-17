const { PlayList } = require('../models/models');

// const ApiError = require('../error/ApiError');

class PlayListController {
   create = async (req, res) => {
     try {
       const { name } = req.body;
       const playList = await PlayList.create({ name });
       res.json(playList);
     } catch (e) {
       res.status(500).json({ message: 'error playlist' });
     }
   }

   getAll = async (req, res) => {
     const playList = await PlayList.findAll();
     return res.json(playList);
   }

  getOne = async (req, res) => {
    const { id } = req.params;
    const playList = await PlayList.findOne({ where: { id } });
    return res.json(playList);
  }

  deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const playList = await PlayList.findOne({ where: { id } });

      await playList.destroy();

      return res.json({ message: 'PlayList deleted' });
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }
}

module.exports = new PlayListController();
