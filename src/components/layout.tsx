import * as React from 'react';
import Aside from './aside/aside';
import store from '../stores';
import AddUserForm from './forms/add-user-form/add-user-form';
import './layout.css';

export default function Layout () {
    return (
        <section className="layout">
            <Aside
                addUser={() => store.dispatch({
                    type: 'ADD_USER', name: 'some text' + Math.random()
                })}
            />
            <div className="main">
                <AddUserForm />
            </div>
        </section>
    );
}
