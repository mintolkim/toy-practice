//router 설정
const router = require("express").Router();
const CO010000MController = require("../co/controller/CO010000MController");
const JI010000MController = require("../ji/controller/JI010000MController");
const DI010000MController = require("../di/controller/DI010000MController");

router.get("/",CO010000MController.main);
router.post("/login",JI010000MController.join);
router.post("/enter", DI010000MController.note);

module.exports = router;