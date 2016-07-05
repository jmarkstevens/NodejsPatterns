import Reflux from 'reflux';

import Actions from '../actions/sa.Actions';

function _GotData(data) { this.data1 = data; BasicStore.trigger('data1'); }

let BasicStoreObject = {
  data1: {},
  listenables: Actions,
  onGotData1: _GotData,
  getData1() { return this.data1; }
}
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
