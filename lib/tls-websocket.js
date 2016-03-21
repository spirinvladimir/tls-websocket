'use strict';

var tls = require('tls');
var Server = require('websocket-stream').Server;
var http = require('http');

var TLSWebsocket = function (config) {
    this.config = config;
};

TLSWebsocket.prototype.start = function () {
    var config = this.config;
    var httpServer;
    
    httpServer = http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('tls-websocket started');
    });
    
    httpServer.listen(config.websocket.httpPort, config.websocket.port, function () {
        console.log('http server started');
    
        var wss = new Server({
            server: httpServer,
            port: config.websocket.port
        });
        
        var tlsSocket = tls.connect(config.tls.port, config.tls.host, function () {
            console.log('tls server started');    
        });
        
        wss.on('connection', function (ws) {
            console.log('websocket server started');
            
            tlsSocket.on('data', function (data) {
                console.log('tls->websocket: ' + data);
                ws.send(data);
            });
                    
            ws.on('message', function (data) {    
                console.log('websocket->tls: ' + data);
                tlsSocket.write(data);
            });
            
            ws.on('close', function (data) {    
                console.log('ws close: ' + data);
            });
            
            tlsSocket.on('end', function (data) {
                console.log('tls end: ' + data);
            });
            
            tlsSocket.on('close', function (data) {
                console.log('tls close: ' + data);
            });
        });
    });
};

module.exports = TLSWebsocket;
