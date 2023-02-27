const JI020000MService = require("../service/JI020000MService");
const logger = require("../../common/config/winston");


const result = {
    //회원가입 화면
    account : async (req, res) => {
        return res.render("ejs/ji/JI020000M.ejs");
    },
    //비밀번호 체크
    pwChk : async (req, res) => {
        var resultPw;
        const { password, pwConfirm } = req.body;

        if(password === pwConfirm){
            resultPw = 1;
        }else{
            resultPw = 0;
        }
        
        return res.json(resultPw);
    },
    //아이디 중복체크
    idChk : async (req, res) => {
        const id = req.body.id;

        var resultId = await JI020000MService.idChk(id);
        
        logger.debug(JSON.stringify(resultId));

        //id 중복
        if(resultId.length > 0){
            resultId = 0;
        }else{
            resultId = 1;
        }
        
        return res.json(resultId);
    },
    //가입 성공 insert
    join : async (req, res) => {
        var message = "가입을 환영합니다 \n로그인 해주세요";
        const { nick, id, password } = req.body;
        params = [nick, id, password];
        await JI020000MService.join(params);

        return res.render("ejs/ji/JI010000M.ejs", {message : message});
    }
}

module.exports = result;
