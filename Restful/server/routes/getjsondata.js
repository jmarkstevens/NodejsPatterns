'use strict';

const fs = require('fs');

const rootDataPath = './data';

module.exports.getData = function(fileName, doneCallBack) {
  const filePath = `${rootDataPath}/${fileName}.json`;
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack({message: 'Data readFile error', filePath});
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setData = function(fileName, data, doneCallBack) {
  const filePath = `${rootDataPath}/${fileName}.json`;
  const writeFileCallBack = function (err) {
    if (err) doneCallBack({message: 'Data writeFile error', filePath});
    doneCallBack({setResponse: 'ok'});
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};
