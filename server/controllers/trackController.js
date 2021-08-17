const { Track } = require('../models/models');

// const ApiError = require('../error/ApiError');

class TrackController {
   create = async (req, res) => {
    try {
      const { filename } = req.file;
      const track = await Track.create({ name: filename });
      return res.json(track);
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }

   getAll = async (req, res) => {
    const tracks = await Track.findAll();
    return res.json(tracks);
  }

   getOne = (req, res) => {
    const { id } = req.params;
    const track = await Track.findOne({ where: { id } });
    return res.json(track);
  }

   deleteUser = (req, res) =>{
    const { id } = req.params;
    try {
      const track = await Track.findOne({ where: { id } });

      await track.destroy();

      return res.json({ message: 'track deleted' });
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }
}

module.exports = new TrackController();
