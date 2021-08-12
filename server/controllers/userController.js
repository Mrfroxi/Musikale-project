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
            return next(ApiError.badRequest('пользователь не найден'))
        }
        if(password !== user.password) {
            return next(ApiError.badRequest('пользователь ввёл неверный пароль'))
        }      
        return res.json(user)
    }
    async check (req,res,next){
      
    }
}

module.exports = new UserController()