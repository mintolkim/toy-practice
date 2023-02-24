const { render } = require("ejs");

const result = {
    account : (req, res) => {
        res.render("ejs/ji/JI020000M.ejs");
    },
    find : (req, res) => {
        res.render("ejs/ji/JI030000M.ejs");
    },
    pwChk : (req, res) => {
        const { password, pwConfirm } = req.body; 

        var resultPw = 1;

        
        return res.render(resultPw);
    }
}

module.exports = result;
