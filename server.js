var express = require('express');
var app = express();

app.use(express.static('./public'));

app.use(function(req, res, next) {
    res.status(404).send('not found');
});
app.use(function(req, res, next) {
    res.status(500).send('oops');
});
app.listen(8000);
