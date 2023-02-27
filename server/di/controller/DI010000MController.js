const logger = require("../../common/config/winston");

const result = {
    //로그아웃
    logout : async (req, res) => {
        logger.debug(req.session.user);
        logger.debug(req.session.user.id);
        logger.debug(JSON.stringify(req.session));
        var message = "";
        //session 지우기
        req.session.destroy((err) => {
            if(err){
                logger.debug(err);
            }
            return res.render("ejs/ji/JI010000M.ejs",{message: message});
        })
    }
}

module.exports = result;