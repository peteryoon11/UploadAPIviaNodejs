//var cluster = require("cluster");
var os = require("os");
//var request = require('request');
var fs = require('fs');
var express = require('express');
//var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();

var log4js=require("log4js")
var logger;
logger = log4js.getLogger('uploadFTP');
var app = express();
var mysql = require('mysql');
var http = require('http');
//var uuid = require('node-uuid');

/* var sh = require('shelljs/global');
var https = require('https');

var net = require('net');

var dateformat = require('dateformat');

var pathmodule = require('path');

var rimraf = require('rimraf');
var HashMap = require('hashmap'); */


var config = require('./config.json');
app.use( log4js.connectLogger(log4js.getLogger('http'), 
{ level: 'auto', format: ':date :response-time :remote-addr :status :method :url HTTP/:http-version ":user-agent"' }));

app.post("/upload",Upload);
app.put("/upload", Upload);
app.listen(config.server.server_port, function () {
    console.log('Example app listening on port ' + config.server.server_port);

    
});




function UploadResult(req,res,callback)
{

}
function UploadClientAuth()
{

}

function Upload(req,res)
{
    
    
    if ('POST' == req.method) {
        console.log("call by post");      
    } else if ('PUT' == req.method) {
        console.log("call by put");      
    }
  //  res.status(200).send("test");

    UploadClientAuth(req,res,function(){

    });

}