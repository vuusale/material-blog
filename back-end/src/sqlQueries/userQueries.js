const userQueries = Object.freeze({
    "postComment": `INSERT INTO 
        comments(title, content, article_id, user_id) 
        VALUES(?, ?, ?, ?)`,
    "deleteComment": `DELETE FROM comments 
        WHERE comment_id = ? AND user_id = ?`,
    "getUserInfo": `SELECT username, email, role FROM users 
        WHERE username = ?`,
});

module.exports = userQueries;