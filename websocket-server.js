const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', webSocket => {
    console.log('connection established');

    webSocket.on('message', (message) => {
        webSocket.send(message);
        wss.clients.forEach((client) => {
            if (client !== webSocket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    webSocket.send(JSON.stringify({
        user: 'server',
        message: 'Welcome!'
    }));

    webSocket.on('close', () => {
        console.log('connection closed by client');
    });
});
 
wss.on('error', (error) => {
    console.log('error occured ', error);
});