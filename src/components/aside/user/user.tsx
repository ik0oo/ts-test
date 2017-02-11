//libs
import * as React from 'react';

//interfaces
import * as userInterface from './user.interface';

//styles
import './user.css';

const imageUrl = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png';

export default class User extends React.Component<userInterface.Props, userInterface.State> {
    constructor (public props: userInterface.Props) {
        super(props);
    }

    render () {
        return (
            <div className="user">
                <figure>
                    <img className="user__profile-image" src={imageUrl} alt="user profile image"/>
                </figure>
                <span className="user__profile-name">{this.props.name}</span>
            </div>
        );
    }
}

