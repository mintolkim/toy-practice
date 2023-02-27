const logger = require("../../common/config/winston");
const JI010000MService = require("../service/JI010000MService");

const result = {
    //로그인 화면
    login : async (req, res) => {
        //세션이 저장되있으면 바로 메모장으로
        if(req.session.user){
            return res.render("ejs/di/DI010000M.ejs",{id : req.session.user.id, nick : req.session.user.nick});
        }else{
            //없을 시 로그인 화면
            var message = "";
            return res.render("ejs/ji/JI010000M.ejs",{message: message});
        }
    },
    //아이디 비밀번호 찾기
    find : async (req, res) => {
        return res.render("ejs/ji/JI030000M.ejs");
    },
    //로그인 체크
    loginChk : async (req,res) => {
        const { id, password, rememberUser} = req.body;
        var params = [id, password];
        var result = await JI010000MService.loginChk(params);

        //로그인 성공
        if(result.length > 0){
            //로그인 유지
            if(typeof rememberUser != undefined && rememberUser == "on"){
                logger.debug("rememberUser : "+rememberUser);
                var periodLogin = 7 * 24 * 60 * 60 * 1000;
                req.session.cookie.maxAge = periodLogin;
            }
            //세션저장
            req.session.user = {
                id : result[0].id,
                nick : result[0].nick
            }
            req.session.save((err) => {
                if(err){
                    logger.debug(err);
                }
                logger.debug(JSON.stringify(req.session.user));
                logger.debug(req.session.user.id);
                logger.debug(req.session.user.nick);

                //렌더링
                res.render("ejs/di/DI010000M.ejs",{id : req.session.user.id, nick : req.session.user.nick});
            })
            
        }else{
            //로그인 실패
            var message = "아이디와 비밀번호가 일치하지 않습니다.";
            res.render("ejs/ji/JI010000M.ejs",{message: message});
        }

    }
}

module.exports = result;
