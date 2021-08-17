const Router = require('express')
const router = new Router()
const trackController = require('../controllers/trackController')
const fileMiddleware = require('../middleware/multerMiddleware')
const AdminRole = require('../middleware/Adminmiddleware')

router.post('/',fileMiddleware.single('song') ,trackController.create)
router.get('/',trackController.getAll)
router.get('/:id',trackController.getOne)
router.delete("/:id",AdminRole('ADMIN'), trackController.deleteUser);


module.exports = router