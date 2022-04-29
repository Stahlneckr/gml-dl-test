import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
  console.log('\nNew client connected');

  ws.on('message', function message(data) {
    console.log(`received: ${data}`);
    ws.send(`echo: ${data}`);
  });

  setTimeout(() => ws.send('You are connected!'), 1000);
});

wss.on('listening', () => { console.log('WSS listening at :3001') });
