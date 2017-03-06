import * as React from 'react';
import * as UserInterface from '../user/user.interface';
import UserDetails from '../forms/user-details';
import store from '../../stores';

const createUser = (user: UserInterface.Props) : void => store.dispatch(
    Object.assign({type: 'ADD_USER'}, user)
);

const CreateUser = () => (
    <UserDetails
        createUser={createUser}
    />
);

export default CreateUser;
