const http = require("http");

const Server = http.createServer(function (req, res){

    if(req.url==="/getdata"){
        res.end("there are no data..❤️")
    }
    res.end("hello world, my name is gagan ");
});

Server.listen(7777);
