const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const userList = [{userName: 'tester1', password: 'tester1pass'}];

passport.use(
  new BasicStrategy(function(username, password, done) {
    let index = userList.findIndex(item => item.userName == username);
    console.log('index: ', index);
    if (index === -1) {
      return done(null, false);
    }

    if (userList[index].password !== password) {
      return done(null, false);
    }

    return done(null, userList[index]);
  })
);
