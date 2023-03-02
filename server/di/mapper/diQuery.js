exports.writeMemo = "INSERT INTO note (id, title, contents) VALUES (?, ?, ?)";
exports.temSave = "INSERT INTO note (id, title, contents, temSave, category) VALUES (?, ?, ?, 1, 9)";
exports.memoList = "SELECT * FROM note WHERE id = ? AND temSave = 0 AND category = 0 ORDER BY num DESC";
exports.memoPage = "SELECT * FROM note WHERE id = ? AND temSave = 0 AND category = 0 ORDER BY num DESC LIMIT ?, ?";