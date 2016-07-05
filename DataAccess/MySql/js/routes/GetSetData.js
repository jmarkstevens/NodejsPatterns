'use strict';

function getData(poolConnection, doneCallBack) {
  var selectCallBack = function(err, rows, fields){
    if (err) doneCallBack('Data readFile error ');
    else {
      doneCallBack(rows[0]);
    }
  };
  poolConnection.query('SELECT * FROM basic ORDER BY pk DESC LIMIT 1', selectCallBack);
}

function setData(data, poolConnection, doneCallBack) {
  var insertCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    doneCallBack('ok');
  };
  poolConnection.query('INSERT INTO basic SET ?', data, insertCallBack);
}

module.exports.getData = getData;
module.exports.setData = setData;
