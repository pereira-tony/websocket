const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', (WebSocket) => {
    console.log('connected');

    webSocket.on('close', () => {
        console.log('disconnected');
    });
})

wss.on('error', (error) => {
    console.log('error occured ', error);
});

