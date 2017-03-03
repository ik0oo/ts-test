import * as React from 'react';
import Aside from './aside/aside';
import store from '../stores';
import UserDetails from './forms/user-details';
import * as UserInterface from './aside/user/user.interface';
import './layout.css';

const createUser = (user: UserInterface.Props) : void => store.dispatch(
    Object.assign({type: 'ADD_USER'}, user)
);

export default function Layout () {
    return (
        <section className="layout">
            <Aside
            />
            <div className="main">
                <UserDetails
                    createUser={createUser}
                />
            </div>
        </section>
    );
}
