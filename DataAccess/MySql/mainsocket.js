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

const getSetData = require('./socket/GetSetData');

module.exports = function(socket) {
  console.log('Socket.io connection made.');

  const getDataDone = function(data){
    console.log('getDataDone');
    socket.emit('server:GetDataDone', data);
  };
  const onGetData = function() {
    console.log('onGetData');
    getSetData.getData(poolConnection, getDataDone);
  };
  socket.on('client:GetData', onGetData);

  const setDataDone = function(){ socket.emit('server:SetDataDone'); };
  const onSetData = function(data) {
    getSetData.setData(data, poolConnection, setDataDone);
  };
  socket.on('client:SetData', onSetData);
};

process.on('SIGINT', function() {
  poolConnection.end(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});
