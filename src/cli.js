#!/usr/bin/env node
var child_process = require('child_process');
var path = require("path");

var spliter = path.delimiter;
var NODE_PATH = process.env.NODE_PATH;

var node_path = [ path.join(__dirname, "../node_modules") ].join(spliter) + (NODE_PATH ? spliter + NODE_PATH : '');

console.log("nodepath", node_path);
process.env.NODE_PATH = node_path;

child_process.fork(__dirname + '/bootstrap/boot.js', process.argv.slice(2), {
    execArgv: []
});
