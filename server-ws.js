import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 80 });

wss.on('connection', function connection(ws) {
  console.log('\nNew client connected');

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

wss.on('listening', () => { console.log('WSS listening at :80') });
