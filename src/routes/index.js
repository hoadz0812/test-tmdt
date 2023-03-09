const productRouter = require('./product.router')
const categoryRouter = require('./category.router')
const routes = app => {
    app.use('/api/product', productRouter)
    app.use('/api/category', categoryRouter)
};

module.exports = routes;
