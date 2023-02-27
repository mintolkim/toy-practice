const logger = require("../../common/config/winston");

const result = {
    note : async (req, res) => {
        return res.render("ejs/di/DI010000M.ejs");
    },
    logout : async (req, res) => {
        logger.debug(req.session.user);
        logger.debug(req.session.user.id);
        logger.debug(JSON.stringify(req.session));
        var message = "로그아웃 되었습니다.";
        req.session.destroy((err) => {
            if(err){
                logger.debug(err);
            }
            return res.render("ejs/ji/JI010000M.ejs",{message: message});
        })
    }
}

module.exports = result;