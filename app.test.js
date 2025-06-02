// app.test.js
const request = require('http');

test('server should respond with hello message', done => {
  const options = {
    host: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
  };

  const req = request.request(options, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      expect(data).toBe('Hello, Jenkins Pipeline!');
      done();
    });
  });

  req.on('error', err => done(err));
  req.end();
});
