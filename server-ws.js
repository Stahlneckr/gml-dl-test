import { createServer } from 'http';
import { parse } from 'url';
import { WebSocketServer } from 'ws';

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws) {
  console.log('\nNew client connected');

  ws.on('message', function message(data) {
    console.log(`received: ${data}`);
    ws.send(`echo: ${data}`);
  });

  setTimeout(() => ws.send('You are connected!'), 1000);
});

server.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = parse(request.url);

  if (pathname === '/echo') {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(3001);
