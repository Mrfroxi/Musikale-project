const Router = require('express')
const router = new Router()
const trackRouter = require('./TrackRouter')
const userRouter = require('./userRouter')



router.use('/track',trackRouter)
router.use('/user',userRouter)


module.exports = router