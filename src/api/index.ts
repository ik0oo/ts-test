import * as reducers from '../reducers';
import store from '../stores';
import { selectUser } from '../actions/user.actions';

export const getActiveUser = (id) => {
    console.log(id, store);
    store.dispatch({type: 'SELECT_USER', users: store.users});
};