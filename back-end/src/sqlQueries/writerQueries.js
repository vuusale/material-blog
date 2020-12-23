const writerQueries = Object.freeze({
    "postArticle": `INSERT INTO 
        articles(author_name, section, subsection, title, content) 
        VALUES(?, ?, ?, ?, ?)`,
    "deleteArticle": `DELETE FROM articles 
        WHERE article_id = ? AND author_name = ?`,
    "updateArticle": `UPDATE articles SET 
        title = CASE WHEN ? IS NOT NULL THEN ? ELSE title END, 
        content = CASE WHEN ? IS NOT NULL THEN ? ELSE content END 
        WHERE article_id = ? AND author_name = ?`
});

module.exports = writerQueries;