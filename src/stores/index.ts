import { createStore, combineReducers } from 'redux';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import redusers from '../reducers';

const store = createStore(redusers);

//export const history = syncHistoryWithStore(browserHistory, store);

export default store;

