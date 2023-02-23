//router 설정
const router = require("express").Router();
const CO010000MController = require("../co/controller/CO010000MController");
const JI010000MController = require("../ji/controller/JI010000MController");

router.get("/",CO010000MController.main);
router.post("/login",JI010000MController.join);

module.exports = router;