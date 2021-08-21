const { Track } = require('../models/models');

const ApiError = require("../error/ApiError")

class TrackController{
    async  create(req,res){
        try{
            console.log(req.file)
            const{filename} =req.file
            const track = await Track.create({name:filename})
            return res.json(track)
        }catch(e){
            console.log(e)
        }
      
    }
    async getAll(req,res){
        const tracks = await Track.findAll()
        return res.json(tracks)
    }
    async getOne(req,res){
        const {id} = req.params
        const track = await Track.findOne({where:{id}})
        return res.json(track)
    }

  async deleteUser(req, res) {
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
