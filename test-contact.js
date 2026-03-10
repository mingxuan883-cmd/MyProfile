const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3002,
  path: '/contact',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Response received');
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.end();
