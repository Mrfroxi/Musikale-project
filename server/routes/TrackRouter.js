const Router = require('express')
const router = new Router()
const trackController = require('../controllers/trackController')
const fileMiddleware = require('../middleware/multerMiddleware')

router.post('/',fileMiddleware.single('song') ,trackController.create)
router.get('/',trackController.getAll)
router.get('/:id',trackController.getOne)
router.delete("/:id", trackController.deleteUser);


module.exports = router