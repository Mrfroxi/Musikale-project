const Router = require("express");

const router = new Router();
const trackRouter = require("./TrackRouter");
const userRouter = require("./userRouter");
const playListRouter = require("./playListRouter");
const FavouriteTrackRoute = require("./FavouriteTrackRoute");

router.use("/track", trackRouter);
router.use("/user", userRouter);
router.use("/playList", playListRouter);
router.use("/favouritetrack", FavouriteTrackRoute);

module.exports = router;
