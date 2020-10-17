'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const logger = morgan('tiny');
const helmet = require('helmet');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
};

app.use(cors(corsOptions));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

const shopController = require('./routes/store');

app.use('/', shopController);
