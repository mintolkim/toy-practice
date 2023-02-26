//router 설정
const router = require("express").Router();
const asyncWrap = require("../common/component/asyncWrap");
const CO010000MController = require("../co/controller/CO010000MController");
const JI010000MController = require("../ji/controller/JI010000MController");
const JI020000MController = require("../ji/controller/JI020000MController");
const DI010000MController = require("../di/controller/DI010000MController");

router.get("/",asyncWrap(CO010000MController.main));
router.post("/login",asyncWrap(JI010000MController.login));
router.post("/find", asyncWrap(JI010000MController.find));
router.post("/join", asyncWrap(JI020000MController.account));
router.post("/joinAccount", asyncWrap(JI020000MController.join));
router.post("/pwChk",asyncWrap(JI020000MController.pwChk));
router.post("/idChk",asyncWrap(JI020000MController.idChk))
router.post("/enter", asyncWrap(DI010000MController.note));

module.exports = router;