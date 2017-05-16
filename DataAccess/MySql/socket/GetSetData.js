'use strict';

module.exports.getData = function(poolConnection, doneCallBack) {
  poolConnection.query('SELECT * FROM basic ORDER BY currentDateTime DESC LIMIT 1', function(error, results, fields) {
    if (error) throw error;
    doneCallBack(results[0]);
  });
};

module.exports.setData = function(data, poolConnection, doneCallBack) {
  poolConnection.query('INSERT INTO basic SET ?', data, function(error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
    doneCallBack('ok');
  });
};
