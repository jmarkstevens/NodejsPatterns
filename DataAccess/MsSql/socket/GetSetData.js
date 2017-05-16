'use strict';

const sql = require('mssql');

module.exports.getData = function(poolConnection, doneCallBack) {
  poolConnection.close();
  poolConnection.connect(err => {
    if (err)
      console.log(err);
    else {
      poolConnection.request().query('SELECT TOP 1 * FROM dbo.basic ORDER BY currentDateTime DESC', (err, results) => {
        if (err) {
          console.log(err);
          throw err;
        } else {
          doneCallBack(results.recordset[0]);
          console.log('getData success! ', results);
        }
        poolConnection.close();
      });
    }
  });
};

module.exports.setData = function(data, poolConnection, doneCallBack) {
  console.log(data);
  poolConnection.close();
  poolConnection.connect(err => {
    if (err)
      console.log(err);
    else {
      poolConnection
        .request()
        .input('version', data.React_version)
        .input('project', data.Project)
        .input('datetime', data.currentDateTime)
        .query(
          'INSERT INTO dbo.basic (react_version, project, currentDateTime) VALUES (@version, @project, @datetime)',
          err => {
            if (err) console.log(err);
            else console.log('setQueryResponse success!');
            doneCallBack('ok');
            poolConnection.close();
          }
        );
    }
  });
};
