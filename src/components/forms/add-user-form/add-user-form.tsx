//import * as React from 'react';
//import * as userInterface from '../../aside/user/user.interface';
//import ProfileFields from '../profile-fields/profile-fields';
//import TransferFields from '../transfer-fields/transfer-fields';
//import store from '../../../stores';
//
//export default class AddUserForm extends React.Component<userInterface.Props, userInterface.State> {
//    static defaultProps = {
//        name: '111',
//        email: 'test@test.ru',
//        conditions: false,
//        money: {
//            rur: 0,
//            usd: 0,
//            eur: 0
//        }
//    };
//
//    constructor (public props: userInterface.Props, public state: userInterface.State) {
//        super(props, state);
//
//        this.state = {
//            name: this.props.name,
//            email: this.props.email,
//            money: this.props.money
//        };
//    }
//
//    handleSubmit (event: React.FormEvent<HTMLFormElement>) : void {
//        (this.state.name.trim() !== '') && store.dispatch({
//            type: 'ADD_USER',
//            name: this.state.name,
//            email: this.state.email,
//            money: [{
//                rur: this.state.money.rur,
//                usd: this.state.money.usd,
//                eur: this.state.money.eur
//            }]
//        });
//
//        this.clearFields();
//        event.preventDefault();
//    }
//
//    handleChange (event: React.FormEvent<HTMLInputElement>) : void {
//        event.persist();
//        const target = event.target;
//        const name = target.name;
//
//        this.setState({
//            [name]: target.type === 'checkbox' ? target.checked : target.value
//        });
//    }
//
//    clearFields () {
//        this.setState({
//            name: '',
//            email: '',
//            conditions: false
//        });
//    }
//
//    render () {
//        return (
//            <div>
//                <h2>New User</h2>
//                <form onSubmit={this.handleSubmit.bind(this)}>
//                    <ProfileFields
//                        name={this.state.name}
//                        email={this.state.email}
//                        conditions={this.state.conditions}
//                        isShowCondition={true}
//                        onChange={this.handleChange.bind(this)}/>
//
//                    <TransferFields
//                        money={this.state.money}
//                        onChange={this.handleChange.bind(this)}/>
//
//
//                {this.props.isShowCondition
//                    ? <button type="submit" disabled={!this.state.conditions}>Save</button>
//                    : <button type="submit">Save</button>
//                }
//                </form>
//            </div>
//        );
//    }
//}
