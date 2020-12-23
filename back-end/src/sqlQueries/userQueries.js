const userQueries = Object.freeze({
    "postComment": `INSERT INTO 
        comments(title, content, article_id, user_id) 
        VALUES(?, ?, ?, ?)`,
    "deleteComment": `DELETE FROM comments 
        WHERE comment_id = ? AND user_id = ?`,
    "getUserInfo": `SELECT username, email, role FROM users 
        WHERE username = ?`,
    "getUserPassword": `SELECT password FROM users 
        WHERE username = ?`,
    "updateUserDashboard": `UPDATE users SET 
        bio = CASE WHEN ? IS NOT NULL THEN ? ELSE bio END, 
        password_hash = CASE WHEN ? IS NOT NULL THEN ? ELSE password_hash END 
        WHERE username = ?`,
});

module.exports = userQueries;