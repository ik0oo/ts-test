import * as React from 'react';
import { connect } from 'react-redux';
import * as userApi from '../../api/index';
import UserDetails from '../forms/user-details';
import store from '../../stores';

class EditUser extends React.Component {
    componentDidMount () {
        let userId = Number(this.props.params.id);
        store.dispatch({type: 'SELECT_USER', id: userId});
    }

    render () {
        console.log(this.props.user);
        return (
            <UserDetails
                {Object.assign({}, this.props.user, {isEditMode: true})}
            />
        );

    }
}

const mapStateToProps = (store) => {
    return {
        user: store.activeUser
    };
};

export default connect(mapStateToProps)(EditUser);
