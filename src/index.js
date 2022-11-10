import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




// import http from 'http';

// const server = http.createServer((req, res) => {
//   res.end('Hello from the server');
// }).listen(4001);

// console.log('Server is up and running');

// export default server;