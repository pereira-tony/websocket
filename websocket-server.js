const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', (WebSocket) => {
    console.log('client connected')
})