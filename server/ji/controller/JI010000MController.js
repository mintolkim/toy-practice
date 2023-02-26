const JI010000MService = require("../service/JI010000MService");

const result = {
    login : async (req, res) => {
        return res.render("ejs/ji/JI010000M.ejs");
    },
    find : async (req, res) => {
        return res.render("ejs/ji/JI030000M.ejs");
    },
    loginChk : async (req,res) => {
        const { id, password } =req.body;
        var params = [id, password];

        var result = await JI010000MService.loginChk(params);

        if(result.length > 0){
            result = 1;
        }else{
            result = 0;
        }

        return res.json(result);
    }
}

module.exports = result;
