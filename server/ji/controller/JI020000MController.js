const { param } = require("../../route/router");
const JI020000MService = require("../service/JI020000MService");

const result = {
    account : (req, res) => {
        res.render("ejs/ji/JI020000M.ejs");
    },
    pwChk : (req, res) => {
        var resultPw;
        const { password, pwConfirm } = req.body;

        if(password === pwConfirm){
            resultPw = 1;
        }else{
            resultPw = 0;
        }

        console.log(`resultPw : ${resultPw}`);
        
        return res.json(resultPw);
    },
    join : (req, res) => {
        var message = "가입을 환영합니다 \n 로그인 해주세요";
        const { nick, id, password } = req.body;
        params = [nick, id, password];
        JI020000MService.join(param);
        res.render("ejs/ji/JI010000M.ejs", {message : message});
    }
}

module.exports = result;
