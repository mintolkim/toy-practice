
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
    }
}

module.exports = result;
