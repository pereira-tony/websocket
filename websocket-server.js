  
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', webSocket => {
    console.log('connection established');
    webSocket.onmessage = (messageEvent) => {
        const message = messageEvent.data;
        console.log('message received ', message);
    };
});
 
wss.on('error', (error) => {
    console.log('error occured ', error);
});

wss.on('close', function close() {
    console.log('connection closed');
});
