const publicQueries = Object.freeze({
    "getArticlesOfSection": `call getArticlesBySection(?)`,
    "getArticle": `SELECT a.title, a.content, a.image, a.published_date, u.username as author
        FROM articles as a, users as u
        WHERE article_id = ?`,
    "getCommentsOfArticle": `SELECT c.comment_id, c.title, c.content, u.username as author
        FROM comments as c, users as u
        WHERE c.article_id = ? AND u.user_id = c.user_id`,
    "getArticlesOfWriter": `SELECT * FROM articles 
        WHERE author_id = ?`,
    "register": `INSERT INTO 
        users(username, password, email, role) 
        VALUES(?, ?, ?, ?)`,
    "login": `SELECT user_id, password, role 
        FROM users 
        WHERE username = ?`,
    "getSections": "call getSections()"
})

module.exports = publicQueries;