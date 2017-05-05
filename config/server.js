const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.listen(port, () => console.log(`server running on port ${port}....`))




module.exports = app;