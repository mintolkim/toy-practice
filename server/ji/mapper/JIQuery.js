exports.userInsert = "INSERT INTO user (nick, id, password) VALUES (?, ?, ?)";
exports.chkUesrId = "SELECT id FROM user WHERE id = ?";
exports.loginChk = "SELECT id FROM user WHERE id = ? AND password = ?";