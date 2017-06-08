'use strict';

const express = require('express');
const router = express.Router();

const getJsonData = require('./routes/getjsondata');

router.get('/getData2', function(req, res) {
  const getData2Done = function(data) {
    res.send(data);
  };
  getJsonData.getData('getSet2', getData2Done);
});

router.post('/setData2', function(req, res) {
  const setData2Done = function(data) {
    res.send(data);
  };
  getJsonData.setData('getSet2', req.body, setData2Done);
});

router.get('/getData3', function(req, res) {
  const getData3Done = function(data) {
    res.send(data);
  };
  getJsonData.getData('getSet3', getData3Done);
});

router.post('/setData3', function(req, res) {
  const setData3Done = function(data) {
    res.send(data);
  };
  getJsonData.setData('getSet3', req.body, setData3Done);
});

module.exports = router;
