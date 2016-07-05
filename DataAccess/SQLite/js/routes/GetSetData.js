'use strict';

function getData(db, doneCallBack) {
  let selectCallBack = function(err, row){
    if (err) console.log('Data readFile error ');
    else doneCallBack(row);
  };
  db.get('SELECT * FROM basic ORDER BY rowid DESC LIMIT 1', selectCallBack);
}

function setData(data, db, doneCallBack) {
  let insertCallBack = function (err) {
    if (err) console.log('Data insert error!');
    doneCallBack('ok');
  };
  var stmt = db.prepare('INSERT INTO basic VALUES ($react_version, $project, $currentDateTime)');
  stmt.run(data);
  stmt.finalize(insertCallBack);
}

module.exports.getData = getData;
module.exports.setData = setData;
