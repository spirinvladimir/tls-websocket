'use strict';

var TLSWebsocket = require('../lib/tls-websocket');

var tls = {
	host: 'sandbox-tradeapi.spotware.com',
	port: 5032
};

var websocket = {
	host: 'localhost',
	port: 4444,
	httpPort: 3333
};

var tLSWebsocket = new TLSWebsocket({
	tls: tls,
	websocket: websocket
});

tLSWebsocket.start();