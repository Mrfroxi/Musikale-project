const {Track} = require('../models/models')

const ApiError = require("../error/ApiError")

class TrackController{
    async  create(req,res){
        const{name,file} =req.body
        const track = await Track.create({name,type:file})
        return res.json(track)
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
        const id = req.params.id;
         try{
         const track = await Track.findOne({where:{id}})

         await track.destroy()

         return res.json({message:'track deleted'})

        }catch(e){
        return res.status(500).json({message:`${e} something is wrong`})
         }
        }
}

module.exports = new TrackController()