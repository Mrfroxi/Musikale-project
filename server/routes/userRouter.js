const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authorizationMiddleware = require('../middleware/authMiddleware')

router.post('/registration',UserController.registration)
router.post('/login',UserController.login)
router.get('/check', authorizationMiddleware,UserController.check )
router.delete('/:id',UserController.deleteUser)



module.exports = router