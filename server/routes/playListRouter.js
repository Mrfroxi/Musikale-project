const Router = require("express");

const router = new Router();
const playListController = require("../controllers/playListController");
// eslint-disable-next-line no-unused-vars
const fileMiddleware = require("../middleware/multerMiddleware");
const guardmiddleware = require("../middleware/guardmiddleware");

router.post("/", playListController.create);
router.get("/", playListController.getAll);
router.get("/:id", playListController.getOne);
router.delete("/:id", guardmiddleware("ADMIN"), playListController.deletePlayList);

module.exports = router;
