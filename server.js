const express = require('express');
const path = require('path');
const server = express();

server.use('/static', express.static('./static'));

server.get('/', (req, res)=> {
  res.sendFile(path.resolve('./index.html'));
});

server.get('/*', (req, res)=> {
  res.sendFile(path.resolve('./index.html'));
});

server.listen(18080, (err)=> {
  if (err) {
    console.log(err.message);
  }
  console.log('server is listening @18080');
});