import * as React from 'react';
import * as userInterface from '../../aside/user/user.interface';
import store from '../../../stores';

export default class AddUserForm extends React.Component<userInterface.Props, userInterface.State> {
    static defaultProps = {
        name: '111'
    };

    constructor (public props: userInterface.Props, public state: userInterface.State) {
        super(props, state);

        this.state = {
            name: this.props.name
        };
    }

    handleSubmit (event: React.FormEvent<HTMLFormElement>) : void {
        (this.state.name.trim() !== '') && store.dispatch({
            type: 'ADD_USER', name: this.state.name
        });

        event.preventDefault();
    }

    handleChange (event: React.FormEvent<HTMLInputElement>) : void {
        this.setState({name: event.target.value});
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />

                    <button type="submit">add user</button>
                </form>
            </div>
        );
    }
}
