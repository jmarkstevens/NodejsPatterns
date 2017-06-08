'use strict';

const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const port1 = Number(3700);
const port2 = Number(3800);

const options = {
  key: fs.readFileSync('/Users/janaka/.localhost-ssl/key.pem'),
  cert: fs.readFileSync('/Users/janaka/.localhost-ssl/cert.pem')
};
const routes1 = require('./routes1');
const routes2 = require('./routes2');

const app = express();
http.createServer(app).listen(port1);
https.createServer(options, app).listen(port2);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const corsOptions = {
  origin: 'https://localhost:3600',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use('/routes1', cors(corsOptions), routes1);

app.use(cors());
app.use('/routes2', routes2);
