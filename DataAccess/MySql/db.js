'use strict';

var mysql = require('mysql');
var poolConnection = mysql.createPool({
  connectionLimit: 100,
  host: '192.168.1.199',
  user: 'testuser',
  password: 'password',
  database: 'testdb'
});

poolConnection.getConnection(function(err) {
  if (!err) console.log('The connection is active now');
});

function QueryResponse(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
}

// poolConnection.query('SELECT 1 + 1 AS solution', QueryResponse);

function finish() {
  poolConnection.end(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
}

function doSelect() {
  poolConnection.query('SELECT * FROM basic ORDER BY currentDateTime DESC LIMIT 1', newData, function(error, results, fields) {
    if (error) throw error;
    console.log(results[0].currentDateTime);
    finish();
  });
}

const newData = {
  React_version: 'MySql test5',
  Project: 'MerlinCSI_Ubuntu_DevServer01',
  currentDateTime: new Date().toLocaleString()
};

poolConnection.query('INSERT INTO basic SET ?', newData, function(error, results, fields) {
  if (error) throw error;
  console.log(results.insertId);
  doSelect();
});

// poolConnection.query(
//   'CREATE TABLE basic (react_version varchar(50), project varchar(50), currentDateTime varchar(50))',
//   err => {
//     if (err) console.log('The CREATE TABLE query failed!');
//     else console.log('The CREATE TABLE query was successful!');
//   }
// );

process.on('SIGINT', function() {
  poolConnection.end(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});
