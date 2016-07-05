'use strict';

require('./model/db');
let Basic = require('./model/basic_model');

var addBasicRecord = function(){
  let newOne = {
    version: 'test add basic',
    project: 'NodejsPatterns/MongoDB',
    datetime: new Date().toLocaleString()
  };

  let basicCreateCallBack = function(err) {
    if (err) console.log('Basic create failed!');
    else console.log('Basic create success!');
  };
  Basic.create(newOne, basicCreateCallBack);
}();
