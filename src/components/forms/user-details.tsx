import * as React from 'react';
import * as UserInterface from '../aside/user/user.interface';
import store from '../../stores';

interface Props extends UserInterface.Props {
    title?: string,
    isEditMode?: boolean,
    createUser: () => void
}

interface State extends UserInterface.State {
    conditions: boolean,
    name: string,
    email: string,
    rur: number,
    usd: number,
    eur: number
}

/*
* by default it uses as a "new user" component
* it may a edit user component if you pass here the "isEditMode=true" property
* */
export default class UserDetails extends React.Component<Props, State> {
    static defaultProps = {
        name: '',
        email: '',
        title: 'New User',
        isEditMode: false,
    };

    constructor (public props: Props, public state: State) {
        super(props, state);

        this.state = {
            name: this.props.name,
            email: this.props.email,
            conditions: false
        };
    }

    createUser (event: React.FormEvent<HTMLButtonElement>) {

        this.props.createUser({
            name: this.state.name,
            email: this.state.email
        });


        this.clean();
        event.preventDefault();
    }

    editUser (event: React.FormEvent<HTMLButtonElement>) {

        event.preventDefault();
    }

    sendTransfer (event: React.FormEvent<HTMLButtonElement>) {

        event.preventDefault();
    }

    clean () {
        this.setState({
            name: '',
            email: ''
        });
    }

    onChange (event: React.FormEvent<HTMLInputElement>) : void {
        const target = event.target as HTMLInputElement;
        const fieldName = target.name;

        this.setState({
            [fieldName]: target.type === 'checkbox' ? target.checked : target.value
        });
    }

    render () {
        const transfers = ['rur', 'usd', 'eur'];

        return (
            <div>
                <h2>{this.props.title}</h2>
                <form>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange.bind(this)} />

                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange.bind(this)} />
                    </div>

                    {!this.props.isEditMode
                        ?
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="conditions"
                                    checked={this.state.conditions}
                                    onChange={this.onChange.bind(this)} />
                                <span>I am agree with the conditions</span>
                            </label>
                        </div>
                        :
                        <button onClick={this.editUser.bind(this)}>Save</button>
                    }

                    <h3>TRANSFER</h3>

                    {transfers.map(item => <div key={item}>
                        <span>{item}</span>
                        <input name={item} type="number" onChange={this.onChange.bind(this)}/>
                    </div>)}

                    {!this.props.isEditMode
                        ? <button onClick={this.createUser.bind(this)}>Save</button>
                        : <button onClick={this.sendTransfer.bind(this)}>Send</button>
                    }

                </form>
            </div>
        );
    }
}
