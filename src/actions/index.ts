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

export const addUser = (users: Users[], action: Action) => [
    ...users,
    {
        id: users.length,
        text: action.text,
        selected: false
    }
];

export const removeUser = (users: Users[], action: Action) => users.filter(user => user.id !== action.id);