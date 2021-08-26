const Router = require("express");

const router = new Router();
const UserController = require("../controllers/userController");
const authorizationMiddleware = require("../middleware/authMiddleware");
const Guardmiddleware = require("../middleware/Guardmiddleware");

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/check", authorizationMiddleware, UserController.check);
router.get("/",  UserController.getAll);
router.delete("/:id", Guardmiddleware("ADMIN"), UserController.deleteUser);

module.exports = router;
