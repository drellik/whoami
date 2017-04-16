var express = require("express");
var app = express();

app.get('/', function (req, res) {
    console.log(req.headers);
    
    //get headers
    //Should set headers to null if results don't come back correctly.
    var ip = null;
    var language = null;
    var os = null;
    ip = req.headers["x-forwarded-for"];
    language = req.headers["accept-language"].split(",")[0];
    os = req.headers["user-agent"].split(/\(|\)/)[1];
    
    //make a JSON object
    var result = {"ipaddress": ip, "language": language, "software": os};
  res.send(result);
});

app.listen(8080);