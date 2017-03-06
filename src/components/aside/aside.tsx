// components
import * as React from 'react';
import User from '../user/user';
import store from '../../stores';
import {browserHistory} from 'react-router';

//styles
import './aside.css';

//interfaces
import * as asideInterface from './aside.interface';
import * as userInterface from '../user/user.interface';


export default class Aside extends React.Component<asideInterface.Props, asideInterface.State> {
    constructor (public props: asideInterface.Props) {
        super(props);
    }

    handleAddUser () {
        browserHistory.push('/');
    }

    render () {
        return (
            <aside className="aside">
                <div className="aside__user-list">
                    {
                        store.getState().users.map((item: userInterface.Props) => <User
                            name={item.name}
                            selected={item.selected}
                            id={item.id}
                            key={item.id}/>
                        )
                    }
                </div>
                <button onClick={this.handleAddUser.bind(this)}>Add user</button>

            </aside>
        );
    }
}
