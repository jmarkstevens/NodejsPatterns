'use strict';

const sql = require('mssql');
const config = {
  user: 'SA',
  password: 'Sinet099)sql',
  server: '192.168.1.199',
  database: 'testdb1'
};

const poolConnection = new sql.ConnectionPool(config, err => {
  if (err) {
    console.log('The connection failed!');
    throw err;
  } else {
    poolConnection
      .request()
      .query(
        'CREATE TABLE dbo.basic (react_version nvarchar(50), project nvarchar(50), currentDateTime nvarchar(50))',
        err => {
          if (err) console.log('The CREATE TABLE query failed!');
        }
      );
  }
});

process.on('SIGINT', function() {
  poolConnection.close(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});

const getSetData = require('./socket/GetSetData');

module.exports = function(socket) {
  console.log('Socket.io connection made.');

  const getDataDone = function(data) {
    console.log('getDataDone');
    socket.emit('server:GetDataDone', data);
  };
  const onGetData = function() {
    console.log('onGetData');
    getSetData.getData(poolConnection, getDataDone);
  };
  socket.on('client:GetData', onGetData);

  const setDataDone = function() {
    socket.emit('server:SetDataDone');
  };
  const onSetData = function(data) {
    getSetData.setData(data, poolConnection, setDataDone);
  };
  socket.on('client:SetData', onSetData);
};
