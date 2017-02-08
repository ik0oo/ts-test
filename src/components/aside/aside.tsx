// components
import * as React from 'react';
import User from './user/user';
import store from '../../stores';

//styles
import './aside.css';

interface Props {
    addUser: () => void
}
interface State {}

interface User {
    text: string
}

export default class Aside extends React.Component<Props, State> {
    constructor (public props: Props) {
        super(props);
    }

    render () {
        return (
            <aside className="aside">
                <div className="aside__user-list">
                    {
                        store.getState().users.map((item: User) => <User key={item.text}/>)
                    }
                </div>
                <button onClick={this.props.addUser}>Add user</button>

            </aside>
        );
    }
}
