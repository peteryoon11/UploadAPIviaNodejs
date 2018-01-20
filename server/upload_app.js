var cluster = require("cluster");
var os = require("os");
var request = require('request');
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var app = express();
var mysql = require('mysql');
var http = require('http');
var uuid = require('node-uuid');

var sh = require('shelljs/global');
var https = require('https');

var net = require('net');

var dateformat = require('dateformat');

var pathmodule = require('path');

var rimraf = require('rimraf');
var HashMap = require('hashmap');


var config = require('./config.json');





app.post("/upload",Upload);
app.put("/upload", Upload);

function Upload()
{

}