const result = {
    login : async (req, res) => {
        return res.render("ejs/ji/JI010000M.ejs");
    },
    find : async (req, res) => {
        return res.render("ejs/ji/JI030000M.ejs");
    }
}

module.exports = result;
