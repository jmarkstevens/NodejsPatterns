'use strict';

const express = require('express');
const router = express.Router();

const getSetData = require('./routes/GetSetData');

router.get('/getData1', function(req, res) {
  const getData1Done = function(data){ res.send(data); };
  getSetData.getData1(getData1Done);
});

router.post('/setData1', function(req, res) {
  const setData1Done = function(data){ res.send(data); };
  getSetData.setData1(req.body, setData1Done);
});

router.get('/getData3', function(req, res) {
  const getData3Done = function(data){ res.send(data); };
  getSetData.getData3(getData3Done);
});

router.post('/setData3', function(req, res) {
  const setData3Done = function(data){ res.send(data); };
  getSetData.setData3(req.body, setData3Done);
});

router.get('/getData4', function(req, res) {
  const getData4Done = function(data){ res.send(data); };
  getSetData.getData4(getData4Done);
});

router.post('/setData4', function(req, res) {
  const setData4Done = function(data){ res.send(data); };
  getSetData.setData4(req.body, setData4Done);
});

router.get('/getData5', function(req, res) {
  const getData5Done = function(data){ res.send(data); };
  getSetData.getData5(getData5Done);
});

router.post('/setData5', function(req, res) {
  const setData5Done = function(data){ res.send(data); };
  getSetData.setData5(req.body, setData5Done);
});

router.get('/getData6', function(req, res) {
  const getData6Done = function(data){ res.send(data); };
  getSetData.getData6(getData6Done);
});

router.post('/setData6', function(req, res) {
  const setData6Done = function(data){ res.send(data); };
  getSetData.setData6(req.body, setData6Done);
});

module.exports = router;
