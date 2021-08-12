const Router = require('express')
const router = new Router()
const trackController = require('../controllers/trackController')


router.post('/',trackController.create)
router.get('/',trackController.getAll)
router.get('/:id',trackController.getOne)


module.exports = router