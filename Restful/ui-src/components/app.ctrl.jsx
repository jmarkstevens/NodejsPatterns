import React from 'react';
import {connect} from 'react-redux';

import AppNotes from './app.notes';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

const AppCtrl = props => {
  return (
    <div id="AppCtrlSty" style={AppCtrlSty}>
      Description: {props.storeData1.Description}<br /><br />
      Current date/time: {props.storeData1.currentDateTime}<br /><br />
      <br /><br />
      Description: {props.storeData2.Description}<br /><br />
      Current date/time: {props.storeData2.currentDateTime}<br /><br />
      <br /><br />
      Description: {props.storeData3.Description}<br /><br />
      Current date/time: {props.storeData3.currentDateTime}<br /><br />
      <br /><br />
      Description: {props.storeData4.Description}<br /><br />
      Current date/time: {props.storeData4.currentDateTime}<br /><br />
      <br /><br />
      Description: {props.storeData5.Description}<br /><br />
      Current date/time: {props.storeData5.currentDateTime}<br /><br />
      <br /><br />
      Description: {props.storeData6.Description}<br /><br />
      Current date/time: {props.storeData6.currentDateTime}<br /><br />
      <br /><br />
      <AppNotes />
    </div>
  );
};

function mapStateToProps(store) {
  return {
    storeData1: store.data1,
    storeData2: store.data2,
    storeData3: store.data3,
    storeData4: store.data4,
    storeData5: store.data5,
    storeData6: store.data6
  };
}

export default connect(mapStateToProps)(AppCtrl);
