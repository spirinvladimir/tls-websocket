'use strict';

var message = [];
message.push('Help:');
message.push('tls-websocket tlsHost tlsPort websocketHost websocketPort httpPort');
message.push('Example:');
message.push('tls-websocket sandbox-tradeapi.spotware.com 5032 localhost 4444 8080');

var help = function () {
	message.forEach(function (line) {
		console.error(line);
	});
	process.exit(1);
};

module.exports = help;
