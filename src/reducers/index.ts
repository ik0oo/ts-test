import * as actions from '../actions';

declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

interface Users {
    id: number,
    text: string,
    selected: boolean
}

interface Action {
    type: string,
    text: string,
    id: number
}

interface State {
    users: Users[]
}

const initialState = {
    users: <Users[]> []
};



const userapp = (state: State = initialState, action: Action) => {
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
