// import { WebSocketServer } from 'ws';

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const wss = new WebSocketServer({ port: 80 });

// wss.on('connection', function connection(ws) {
//   console.log('\nNew client connected');

//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });

//   ws.send('something');
// });

// wss.on('listening', () => { console.log('WSS listening at :80') });
