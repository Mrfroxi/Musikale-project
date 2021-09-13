const Router = require("express");

const router = new Router();
const trackController = require("../controllers/trackController");
const fileMiddleware = require("../middleware/multerMiddleware");
const guardmiddleware = require("../middleware/guardmiddleware");


router.post("/", fileMiddleware.single("song"), trackController.create);
router.get("/", trackController.getAll);
router.put("/:id", trackController.getChangeClosed);
router.delete("/:id", guardmiddleware("ADMIN"), trackController.deleteTrack);

module.exports = router;
