#!/usr/bin/env node

var livereload = require('livereload');
var server = livereload.createServer({"usePolling": 0.1, "delay": 100, "applyScriptLive": true});
console.log("Starting live-reload.");
server.watch(__dirname);
