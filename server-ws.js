import { createServer } from 'http';
import { parse } from 'url';
import { WebSocketServer } from 'ws';

// import express from 'express';
// const app = express();
// const port = 3001;

// app.get("/", (req, res) => res.type('html').send(html));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws) {
  console.log('\nNew client connected');

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

wss.on('error', (e) => console.log(e))

server.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = parse(request.url);

  if (pathname === '/ws') {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(3001);
