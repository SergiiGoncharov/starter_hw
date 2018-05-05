'use strict';

const express = require('express');
const path = require('path');
const hello_api = require('./hello-api.js');

const app_root = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'production';
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile('dist/client/index.html', { root: app_root });
});

app.get('/api/hello', hello_api);

if (env ==='development') {
    app.use(require('connect-livereload')({}));
}

app.use(express.static('dist/client'));

app.use('/*', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => console.log(`Express server is listening on port ${port}!`));
