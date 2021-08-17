const {PlayList} = require('../models/models')

const ApiError = require("../error/ApiError")

class PlayListController{
  async  create(req,res){
      try{
          const{name} =req.body
          const playList = await PlayList.create({name})
          return res.json(playList)
      }catch(e){
          console.log(e)
      }
    
  }
  async getAll(req,res){
      const playList = await PlayList.findAll()
      return res.json(playList)
  }
  async getOne(req,res){
      const {id} = req.params
      const playList = await PlayList.findOne({where:{id}})
      return res.json(playList)
  }
  async deleteUser(req, res) {
      const id = req.params.id;
       try{
       const playList = await PlayList.findOne({where:{id}})

       await playList.destroy()

       return res.json({message:'PlayList deleted'})

      }catch(e){
      return res.status(500).json({message:`${e} something is wrong`})
       }
      }
}

module.exports = new PlayListController()