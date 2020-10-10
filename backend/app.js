'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const logger = morgan('tiny');
const helmet = require('helmet');
const connectDB = require('./config/db');


connectDB();

const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

app.get('/', (req, res) => {
    res.sendStatus(200);
})