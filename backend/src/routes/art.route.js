const { artController } = require("../controllers");
const Router = require("express").Router;
const router = new Router();

router.get("/generate", artController.getGeneratedArt);
module.exports = router;
