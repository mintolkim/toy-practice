const logger = require("../../common/config/winston");
const JI010000MService = require("../service/JI010000MService");

const result = {
    login : async (req, res) => {
        if(req.session.user){
            return res.render("ejs/di/DI010000M.ejs");
        }else{
            var message = "";
            return res.render("ejs/ji/JI010000M.ejs",{message: message});
        }
    },
    find : async (req, res) => {
        return res.render("ejs/ji/JI030000M.ejs");
    },
    loginChk : async (req,res) => {
        const { id, password } =req.body;
        var params = [id, password];

        var result = await JI010000MService.loginChk(params);
        
        if(result.length > 0){
            req.session.user = {
                id : result[0].id,
                nick : result[0].nick
            }
            req.session.save((err) => {
                if(err){
                    logger.debug(err);
                }
                logger.debug(req.session.user);
                logger.debug(req.session.user.id);
                logger.debug(req.session.user.nick);
                res.render("ejs/di/DI010000M.ejs",{id : req.session.user.id, nick : req.session.user.nick});
            })
            
        }else{
            var message = "아이디와 비밀번호가 일치하지 않습니다.";
            res.render("ejs/ji/JI010000M.ejs",{message: message})
        }

    }
}

module.exports = result;
