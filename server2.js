var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.get("/api/missatges", function(req, res) {
    res.json({
        username: "xavigimenez",
        body: "tirant lo blanc"
    });
    
});

app.post("/api/missatges", function (req,res) {
    console.log('missatge rebut!');
    console.log(req.body.username);
    console.log(req.body.body);
    res.sendStatus(201);
});

app.listen(process.env.PORT, function() {
    console.log('Server listening on', process.env.PORT);
});
