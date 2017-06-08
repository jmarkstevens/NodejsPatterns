'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const jsonHeader = {Accept: 'application/json', 'Content-Type': 'application/json'};
const rootDataPath = './data';

module.exports.getData1 = function(doneCallBack) {
  const filePath = rootDataPath + '/getSet1.json';
  const jsonReadCallBack = function(err, data) {
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setData1 = function(data, doneCallBack) {
  const filePath = rootDataPath + '/getSet1.json';
  const writeFileCallBack = function(err) {
    if (err) console.log('error saving Data.json file ');
    doneCallBack({setResponse: 'ok'});
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

const agentOptions3 = {rejectUnauthorized: false};
const agent3 = new https.Agent(agentOptions3);

module.exports.getData3 = function(doneCallBack) {
  fetch('https://localhost:3800/routes1/getData3', {agent: agent3})
    .then(response => response.json())
    .then(json => doneCallBack(json));
};

module.exports.setData3 = function(data, doneCallBack) {
  fetch('https://localhost:3800/routes1/setData3', {
    agent: agent3,
    method: 'POST',
    headers: jsonHeader,
    body: JSON.stringify(data)
  }).then(() => {
    doneCallBack({setResponse: 'ok'});
  });
};

const username = 'tester1';
const password = 'tester1pass';
jsonHeader.Authorization = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

module.exports.getData4 = function(doneCallBack) {
  fetch('https://localhost:3800/routes2/getData4', {agent: agent3, headers: jsonHeader})
    .then(response => response.json())
    .then(json => doneCallBack(json));
};

module.exports.setData4 = function(data, doneCallBack) {
  fetch('https://localhost:3800/routes2/setData4', {
    agent: agent3,
    method: 'POST',
    headers: jsonHeader,
    body: JSON.stringify(data)
  }).then(() => {
    doneCallBack({setResponse: 'ok'});
  });
};

module.exports.getData5 = function(doneCallBack) {
  const options5 = {
    host: 'localhost',
    path: '/routes2/getData5',
    port: 3800,
    headers: jsonHeader
  };
  let request = https.get(options5, function(res) {
    let body = '';
    res.on('data', function(data) {
      body += data;
    });
    res.on('end', function() {
      doneCallBack(JSON.parse(body));
    });
    res.on('error', function(e) {
      console.log('Got error: ' + e.message);
    });
  });
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports.setData5 = function(data, doneCallBack) {
  const postData = querystring.stringify(data);
  const headeradd = {
    'Content-Length': postData.length,
    'Accept': 'text/html, application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const header5 = Object.assign({}, jsonHeader, headeradd);
  const options5 = {
    host: 'localhost',
    method: 'POST',
    path: '/routes2/setData5',
    port: 3800,
    headers: header5
  };
  let request = https.request(options5, function(res) {
    let body = '';
    res.on('data', function(data) {
      body += data;
    });
    res.on('end', function() {
      doneCallBack(body);
    });
    res.on('error', function(e) {
      console.log('Got error: ' + e.message);
    });
  });
  request.write(postData);
  request.end();
};

module.exports.getData6 = function(doneCallBack) {
  fetch(`https://localhost:3800/routes2/getData6?username=${username}&password=${password}`, {agent: agent3, headers: jsonHeader})
    .then(response => response.json())
    .then(json => doneCallBack(json));
};

module.exports.setData6 = function(data, doneCallBack) {
  fetch(`https://localhost:3800/routes2/setData6?username=${username}&password=${password}`, {
    agent: agent3,
    method: 'POST',
    headers: jsonHeader,
    body: JSON.stringify(data)
  }).then(() => {
    doneCallBack({setResponse: 'ok'});
  });
};
