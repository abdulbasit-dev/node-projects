const Router = require('express').Router();

Router.get('/products', (req, res) => {
    res.send("<h1>all Products</h1>");
});


module.exports = Router;