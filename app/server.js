const express = require('express');
const router = require('./router');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);
app.listen(port, () => {
  process.stdout.write(`Running on ${host}:${port}\n`);
});
