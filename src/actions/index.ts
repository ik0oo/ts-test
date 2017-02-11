import * as userInterface from '../components/aside/user/user.interface';

export interface ActionInterface {
    type: string,
    name: string,
    id: number
}

export const addUser = (users: userInterface.Props[], action: ActionInterface) => [
    ...users,
    {
        id: users.length,
        name: action.name,
        selected: false
    }
];

export const removeUser = (users: userInterface.Props[], action: ActionInterface) => users.filter(user => user.id !== action.id);