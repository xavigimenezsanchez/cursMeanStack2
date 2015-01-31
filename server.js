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

app.listen(process.env.PORT, function() {
    console.log('Server listening on', process.env.PORT);
});
