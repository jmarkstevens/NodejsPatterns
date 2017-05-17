'use strict';

var sql = require('mssql');
var config = {
  user: 'testuser',
  password: 'Sinet099)sql',
  server: '192.168.1.199',
  database: 'testdb1'
};

// function QueryResponse(err, rows) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// }

// var connection1 = new sql.ConnectionPool(config, function(err) {
//   if (err) {
//     console.log('The connection failed!');
//     throw err;
//   }
//   else {
//     var request = new sql.Request(connection1);
//     request.query('SELECT 1 + 1 AS solution', QueryResponse);
//   }
//   connection1.close(function(err) {
//     if (err) console.log('connection close error');
//     else console.log('connection closed');
//   });
// });

const pool1 = new sql.ConnectionPool(config, err => {
  pool1
    .request()
    .input('version', 'data.version')
    .input('project', 'data.project')
    .input('datetime', 'data.datetime')
    .query(
      'INSERT INTO dbo.basic (react_version, project, currentDateTime) VALUES (@version, @project, @datetime)',
      (err, result) => {
        if (err) console.log(err);
        else console.log(result.recordset);
      }
    );
});

pool1.on('error', err => {
  console.log('The connection failed!');
});

// const pool2 = new sql.ConnectionPool(config);
// pool2.connect(err => {
//   if (err)
//     console.log(err);
//   else {
//     pool2.request().query('select 2 as number', (err, result) => {
//       if (err) console.log(err);
//       else console.log(result.recordset);
//     });
//   }
// });

// (async function() {
//   try {
//     let pool = await sql.connect(config);
//     let result1 = await pool.request().query('SELECT 1 + 1 AS solution');
//
//     console.dir(result1.recordset);
//     sql.close();
//   } catch (err) {
//     console.log('The connection failed!');
//   }
// })();

// pool1
//   .request()
//   .query('SELECT 2 + 2 AS solution2')
//   .then(result2 => {
//     console.dir(result2.recordset);
//   })
//   .catch(err => {
//     console.log('The connection failed!');
//   });
//
// sql.on('error', err => {
//   console.log('The connection failed!');
// });
