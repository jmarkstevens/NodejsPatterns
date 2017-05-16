import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import {apiSetData} from './Actions';
import startWs, {wsMiddleware} from './ws.api';

function handleData(state = {data1: {}}, action) {
  switch (action.type) {
    case 'ApiGotData': return Object.assign({}, state, {data1: action.data});
    default: return state;
  }
}

let middleware = [wsMiddleware];

const useLogger = 1;
const loggerMiddleware = createLogger();
if (useLogger) middleware.push(loggerMiddleware);

const store = createStore(handleData, applyMiddleware(...middleware));

startWs(store);

const newData = {
  'React_version': '15',
  'Project': 'MerlinCSI_Ubuntu_DevServer01',
  'currentDateTime': new Date().toLocaleString()
};

store.dispatch(apiSetData(newData));

export default store;
