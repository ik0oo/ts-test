import * as userInterface from '../components/user/user.interface';
import * as userActions from "../actions/user.actions";

//declare interface ObjectConstructor {
//    assign(...objects: Object[]): Object;
//}

interface State {
    users: userInterface.Props[]
}

const initialState = {
    users: <userInterface.Props[]> [],
    activeUser: {}
};

const userapp = (state: State = initialState, action: userActions.ActionInterface) => {
    switch (action.type) {
        case 'ADD_USER':
            return (<any>Object).assign({}, state, {
                users: userActions.addUser(state.users, action)
            });

        case 'SELECT_USER':
            console.log(action)
            return (<any>Object).assign({}, state, {
                activeUser: userActions.selectUser(state.users, action)
            });

        case 'REMOVE_USER':
            return (<any>Object).assign({}, state, {
                users: userActions.removeUser(state.users, action)
            });

        default:
            return state;
    }
};

export default userapp;
