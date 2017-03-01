import * as React from 'react';
import Aside from './aside/aside';
import store from '../stores';
import UserDetails from './forms/user-details';
import './layout.css';

const createUser = user => store.dispatch(
    Object.assign({type: 'ADD_USER'}, user)
);

export default function Layout () {
    return (
        <section className="layout">
            <Aside
                addUser={() => store.dispatch({
                    type: 'ADD_USER', name: 'some text' + Math.random()
                })}
            />
            <div className="main">
                <UserDetails
                    createUser={createUser}
                />
            </div>
        </section>
    );
}
