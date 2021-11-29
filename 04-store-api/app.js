const express = require('express');
require('dotenv').config();
const colors = require('colors');
const errorMiddleware = require('./middleware/error-handler');
const routes = require('./routes/routes');


//create app
const app = express();
const port = process.env.port;


app.listen(port, () => console.log(`server run on port ${port}`.red));



//routes
app.get('/', (req, res) => {
    res.send("<h1>Store Api</h1><a href='/api/v1/productss'>product routes</a>");
});

//API v1
app.use('/api/v1', routes);


// If no route found
app.use(function (req, res) {
    return res.status(404).json({
        code: 404,
        status: false,
        message: `Invalid endpoint : ${req.originalUrl}`
    });
});

app.use(errorMiddleware);
