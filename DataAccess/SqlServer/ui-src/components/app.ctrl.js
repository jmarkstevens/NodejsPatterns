import React from 'react';

import BasicStore from '../stores/Basic.Store';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

const getState = () => {
  return {
    Data1: BasicStore.getData1()
  };
};

class AppCtrlRender extends React.Component {
   render() {
    let data1 = this.state.Data1;
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React Version: {data1.react_version}<br/><br/>
        Project: {data1.project}<br/><br/>
        Current date/time: {data1.currentDateTime}<br/><br/>
      </div>
    );
  }
}

export default class AppCtrl extends AppCtrlRender {
  state = getState();

  componentDidMount = () => { this.unsubscribe = BasicStore.listen(this.storeDidChange); };
  componentWillUnmount = () => { this.unsubscribe(); };
  storeDidChange = (id) => {
    switch (id) {
      case 'data1': this.setState({Data1: BasicStore.getData1()}); break;
      default: this.setState(getState());
    }
  };
}
