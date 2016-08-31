/*
Web application assignment 1 - USTH 2016
Group assignment
Node.js Serverside handling script 
*/

var http = require("http");
var file = require('fs');
var path = require('path');
var express = require('express');

/* legacy server
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello World");
    
}).listen(8080);
*/

//express server
app = express();
app.set('view engine','jade');

//All support folders
app.use("/css",  express.static(__dirname + '/../css'));
app.use("/js", express.static(__dirname + '/../js'));
app.use("/font", express.static(__dirname + '/../font'));
app.use("/img_about",  express.static(__dirname + '/../img_about'));
app.use("/img_home",  express.static(__dirname + '/../img_home'));
app.use("/img_member",  express.static(__dirname + '/../img_member'));
app.use("/img_new",  express.static(__dirname + '/../img_new'));
app.use("/img_swarms_project",  express.static(__dirname + '/../img_swarms_project'));
app.use("/img_archives_project",  express.static(__dirname + '/../img_archives_project'));
app.use("/img",  express.static(__dirname + '/../img'));
app.use("/img_new",  express.static(__dirname + '/../img_new'));

//index handler
app.get('/', function(req, res){
    res.sendfile('index.html', {root: './..'});
});

//other handler
app.get('/:name',function(req,res){
    var file_name = req.params.name;
    console.log(file_name);
    //res.sendFile(file_name);
    
    res.sendfile(file_name, {root: './..'});
});

//server listen
app.listen(8080, function(){
    console.log('Server running at 8080');
});