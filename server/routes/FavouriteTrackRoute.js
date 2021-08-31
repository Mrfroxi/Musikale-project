const Router = require("express");

const router = new Router();
const FavtrackController = require("../controllers/FavtrackController");
// const fileMiddleware = require("../middleware/multerMiddleware");
const Guardmiddleware = require("../middleware/Guardmiddleware");



router.post("/", FavtrackController.Add)
router.get("/", FavtrackController.getAll);
router.delete("/:id", Guardmiddleware("ADMIN"), FavtrackController.deleteFavouriteTrack);

module.exports = router;
