import request from 'superagent';

import apiActions from '../actions/api.Actions';
import saActions from '../actions/sa.Actions';

module.exports = {
  getData() { request.get('/routes/getData').end((err, res) => { saActions.gotData1(res.body); }); },
  setData(data) { request.post('/routes/setData').send(data).end((err, res) => { apiActions.apiInitDone(); }) },
};
