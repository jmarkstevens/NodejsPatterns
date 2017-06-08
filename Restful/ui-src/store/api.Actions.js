import 'whatwg-fetch';

const jsonHeader = {Accept: 'application/json', 'Content-Type': 'application/json'};

export function apiSetGetData1(data) {
  return dispatch => {
    fetch('/routes/setData1', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)}).then(() => {
      fetch('/routes/getData1')
        .then(response => response.json())
        .then(json => dispatch({type: 'GetDataDone1', payload: json}));
    });
  };
}

export function apiSetGetData2(data) {
  return dispatch => {
    fetch('https://localhost:3800/routes1/setData2', {
      method: 'POST',
      headers: jsonHeader,
      body: JSON.stringify(data)
    }).then(() => {
      fetch('https://localhost:3800/routes1/getData2')
        .then(response => response.json())
        .then(json => dispatch({type: 'GetDataDone2', payload: json}));
    });
  };
}

export function apiSetGetData3(data) {
  return dispatch => {
    fetch('/routes/setData3', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)}).then(() => {
      fetch('/routes/getData3')
        .then(response => response.json())
        .then(json => dispatch({type: 'GetDataDone3', payload: json}));
    });
  };
}

export function apiSetGetData4(data) {
  return dispatch => {
    fetch('/routes/setData4', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)}).then(() => {
      fetch('/routes/getData4')
        .then(response => response.json())
        .then(json => dispatch({type: 'GetDataDone4', payload: json}));
    });
  };
}

export function apiSetGetData5(data) {
  return dispatch => {
    fetch('/routes/setData5', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)}).then(() => {
      fetch('/routes/getData5')
        .then(response => response.json())
        .then(json => dispatch({type: 'GetDataDone5', payload: json}));
    });
  };
}

export function apiSetGetData6(data) {
  return dispatch => {
    fetch('/routes/setData6', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)}).then(() => {
      fetch('/routes/getData6')
        .then(response => response.json())
        .then(json => dispatch({type: 'GetDataDone6', payload: json}));
    });
  };
}
