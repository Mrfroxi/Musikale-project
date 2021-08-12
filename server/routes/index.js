const Router = require('express')
const router = new Router()
const trackRouter = require('./TrackRouter')
const userRouter = require('./userRouter')
const playListRouter = require('./playListRouter')
const playListTrackRouter = require('./playListTrackRouter') //музыка в плэйлисте



router.use('/track',trackRouter)
router.use('/user',userRouter)
router.use('/playList', playListRouter)
router.use('/playListTrackRouter',playListTrackRouter)


module.exports = router