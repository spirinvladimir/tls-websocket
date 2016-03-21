#! /usr/bin/env node
'use strict';

var TLSWebsocket = require('../lib/tls-websocket');
var help = require('../lib/help');

var args = process.argv.slice(2);

var tls = {};
var websocket = {};

tls.host = args[0] || help();
tls.port = args[1] || help();

websocket.host = args[2] || help();
websocket.port = args[3] || help();
websocket.httpPort = args[4] || help();

var tLSWebsocket = new TLSWebsocket({
	tls: tls,
	websocket: websocket
});

tLSWebsocket.start();
