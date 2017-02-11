import * as userInterface from '../components/aside/user/user.interface';

export interface ActionInterface {
    type: string,
    name: string,
    id: number,
}

export const addUser = (users: userInterface.Props[], action: ActionInterface) => [
    ...users,
    {
        id: users.length,
        name: action.name,
        selected: false
    }
];

export const selectUser = (users: userInterface.Props[], action: ActionInterface) => users.map((user: userInterface.Props) => {
    user.selected = user.id === action.id;
    return user;
});

export const removeUser = (users: userInterface.Props[], action: ActionInterface) => users.filter((user: userInterface.Props) => user.id !== action.id);