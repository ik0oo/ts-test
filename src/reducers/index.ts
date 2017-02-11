import * as userInterface from '../components/aside/user/user.interface';
import * as actions from "../actions/index";

declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

interface State {
    users: userInterface.Props[]
}

const initialState = {
    users: <userInterface.Props[]> []
};

const userapp = (state: State = initialState, action: actions.ActionInterface) => {
    switch (action.type) {
        case 'ADD_USER':
            return (<any>Object).assign({}, state, {
                users: actions.addUser(state.users, action)
            });

        case 'REMOVE_USER':
            return (<any>Object).assign({}, state, {
                users: actions.removeUser(state.users, action)
            });

        default:
            return state;
    }
};

export default userapp;
