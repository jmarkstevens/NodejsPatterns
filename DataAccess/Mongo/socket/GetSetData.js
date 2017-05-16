'use strict';

let Basic = require('../model/basic_model');

module.exports.getData = function(doneCallBack) {
  var getLatestCallBack = function(err, record){
    if (err) doneCallBack('Data readFile error ');
    else doneCallBack(record[0]);
  };
  Basic.GetLatest(getLatestCallBack);
};

module.exports.setData = function(data, doneCallBack) {
  var basicCreateCallBack = function (err) {
    if (err) console.log('error saving Data ');
    else doneCallBack('ok');
  };
  Basic.create(data, basicCreateCallBack);
};
