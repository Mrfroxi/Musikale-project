const { Track } = require('../models/models');
const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const mm = require('music-metadata');
// const util = require('util');
 

class TrackController{
    async  create(req,res){
        try{
          // const metadata = await mm.parseFile(`./song/${req.filename}`);
          // console.log(metadata.common.picture[0].format)
          // console.log(metadata.common.picture[0].data)
          // const format = metadata.common.picture[0].format
          // const data = metadata.common.picture[0].data
          // console.log(`data:${format};base64,${Buffer.from(data).toString('base64')}`)
          let authorization = req.headers.authorization.split(' ')[1],
          decoded;
            try {
                decoded = jwt.verify(authorization, process.env.SECRET_KEY);
            } catch (e) {
                return res.status(401).send('unauthorized');
            }
            const id_user = decoded.id
          console.log(req.file)
            const{filename} =req.file
            const track = await Track.create({name:filename ,userId:id_user })
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
