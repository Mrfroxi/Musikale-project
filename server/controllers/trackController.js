const {Track} = require('../models/models')

const ApiError = require("../error/ApiError")

class TrackController{
    async  create(req,res){
        const{name} =req.body
        const track = await Track.create({name})
        return res.json(track)
    }
    async getAll(req,res){
        const tracks = await Track.findAll()
        return res.json(tracks)
    }
    async getOne(req,res){
        const {id} = req.params
        const track = await Track.findOne(
            {
                where:{id}
            }
        )
        return res.json(track)
    }
}

module.exports = new TrackController()