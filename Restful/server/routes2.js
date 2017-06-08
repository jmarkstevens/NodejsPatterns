'use strict';

const express = require('express');
const router = express.Router();

const getJsonData = require('./routes/getjsondata');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');

function validate(username, password, cb) {
  db.users.findByUsername(username, function(err, user) {
    if (err) {
      return cb(err);
    }
    if (!user) {
      return cb(null, false);
    }
    if (user.password != password) {
      return cb(null, false);
    }
    return cb(null, user);
  });
}

passport.use(new BasicStrategy((username, password, cb) => validate(username, password, cb)));
passport.use(new LocalStrategy((username, password, cb) => validate(username, password, cb)));

router.post('/setData4', passport.authenticate('basic', {session: false}), function(req, res) {
  const setData4Done = function(data) {
    res.send(data);
  };
  getJsonData.setData('getSet4', req.body, setData4Done);
});

router.get('/getData4', passport.authenticate('basic', {session: false}), function(req, res) {
  const getData4Done = function(data) {
    res.send(data);
  };
  getJsonData.getData('getSet4', getData4Done);
});

router.get('/getData5', passport.authenticate('basic', {session: false}), function(req, res) {
  const getData5Done = function(data) {
    res.send(data);
  };
  getJsonData.getData('getSet5', getData5Done);
});

router.post('/setData5', passport.authenticate('basic', {session: false}), function(req, res) {
  const setData5Done = function(data) {
    res.send(data);
  };
  getJsonData.setData('getSet5', req.body, setData5Done);
});

router.get('/getData6', passport.authenticate('local', {session: false}), function(req, res) {
  const getData6Done = function(data) {
    res.send(data);
  };
  getJsonData.getData('getSet6', getData6Done);
});

router.post('/setData6', passport.authenticate('local', {session: false}), function(req, res) {
  const setData6Done = function(data) {
    res.send(data);
  };
  getJsonData.setData('getSet6', req.body, setData6Done);
});

module.exports = router;
