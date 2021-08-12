const ApiError = require("../error/ApiError")
const {User} = require('../models/models')

class UserController{
    async registration (req,res,next){
        const {email,password} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Неккоректный email или password'))
        }
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError.badRequest('такой пользовательс email уже есть'))
        }
        const selectuser = await User.create({email,password})
        return res.json(selectuser)
    }
    async login (req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.forbidden('@@@'))
        }
        if(password !== user.password) {
            return next(ApiError.forbidden('пользователь ввёл неверный пароль'))
        }      
        return res.json(user)
    }
    async check (req,res,next){
      
    }
     async deleteUser(req, res) {
        const id = req.params.id;
         try{
         const user = await User.findOne({where:{id}})

         await user.destroy()

         return res.json({message:'User deleted'})

        }catch(e){
        return res.status(500).json({message:`${e} something is wrong`})
         }
     }

}

module.exports = new UserController()