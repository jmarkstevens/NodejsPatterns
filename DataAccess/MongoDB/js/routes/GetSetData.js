'use strict';

let Basic = require('../model/basic_model');

function getData(doneCallBack) {
  var getLatestCallBack = function(err, record){
    if (err) doneCallBack('Data readFile error ');
    else doneCallBack(record[0]);
  };
  Basic.GetLatest(getLatestCallBack);
}

function setData(data, doneCallBack) {
  var basicCreateCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    else doneCallBack('ok');
  };
  Basic.create(data, basicCreateCallBack);
}

module.exports.getData = getData;
module.exports.setData = setData;
