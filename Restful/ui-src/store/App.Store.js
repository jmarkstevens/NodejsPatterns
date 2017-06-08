import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {apiSetGetData1, apiSetGetData2, apiSetGetData3, apiSetGetData4, apiSetGetData5, apiSetGetData6} from './api.Actions';

const initialData = {
  data1: {},
  data2: {},
  data3: {},
  data4: {},
  data5: {},
  data6: {}
};

function handleData(state = initialData, action) {
  switch (action.type) {
    case 'GetDataDone1':
      return Object.assign({}, state, {data1: action.payload});
    case 'GetDataDone2':
      return Object.assign({}, state, {data2: action.payload});
    case 'GetDataDone3':
      return Object.assign({}, state, {data3: action.payload});
    case 'GetDataDone4':
      return Object.assign({}, state, {data4: action.payload});
    case 'GetDataDone5':
      return Object.assign({}, state, {data5: action.payload});
    case 'GetDataDone6':
      return Object.assign({}, state, {data6: action.payload});
    default:
      return state;
  }
}

const store = createStore(handleData, applyMiddleware(thunkMiddleware));

const newData1 = {
  Description: 'apiSetGetData1, fetch from 3600',
  currentDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetGetData1(newData1));

const newData2 = {
  Description: 'apiSetGetData2, fetch direct from localhost:3800 with cors limited to localhost:3600',
  currentDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetGetData2(newData2));

const newData3 = {
  Description: 'apiSetGetData3, fetch from localhost:3800 via localhost:3600 using fetch',
  currentDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetGetData3(newData3));

const newData4 = {
  Description: 'apiSetGetData4, fetch from localhost:4000 via localhost:3600 with Authorization basic using fetch',
  currentDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetGetData4(newData4));

const newData5 = {
  Description: 'apiSetGetData5, fetch from localhost:4000 via localhost:3600 with Authorization basic using https.request',
  currentDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetGetData5(newData5));

const newData6 = {
  Description: 'apiSetGetData6, fetch from localhost:4000 via localhost:3600 with Authorization local using fetch',
  currentDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetGetData6(newData6));

export default store;
