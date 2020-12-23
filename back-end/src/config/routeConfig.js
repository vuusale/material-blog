const routeConfig = app => {
    app.use('/article', require('../routes/article'));
    app.use('/comment', require('../routes/comment'));
    app.use('/auth', require('../routes/auth'));
    app.use('/', require('../routes/main'));
}

module.exports = routeConfig;