//router 설정
const router = require("express").Router();
const CO010000MController = require("../co/controller/CO010000MController");

router.get("/",CO010000MController.main);

module.exports = router;