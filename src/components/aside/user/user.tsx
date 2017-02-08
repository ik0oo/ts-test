import * as React from 'react';
import './user.css';

const imageUrl = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png';

const User = () => (
    <div className="user">
        <figure>
            <img className="user__profile-image" src={imageUrl} alt="user profile image"/>
        </figure>
        <span className="user__profile-name">User Name</span>
    </div>
);

export default User;

