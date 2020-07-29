var express = require('express');
var app = express();

app.use(function (req, res, next) {
        let curdate = new Date();
        console.log(curdate.toISOString() + '  incoming request');
        next();
});

app.use(express.static(__dirname + '/www'));


app.listen(8080, '0.0.0.0', function() {
  console.log("server started");
});