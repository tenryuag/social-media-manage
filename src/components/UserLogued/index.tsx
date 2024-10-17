import React from "react";
import './styles.css';

const UserLogued = ({ user, onLogout }) => {

    const handleLogout = () => {
        onLogout();
        window.FB.logout();
    };

    return(
        <nav className="navbar navbar-light bg-light">
            {user.picture && 
            <img 
            src={user.picture.data.url} 
            className="userImage"
            alt={user.name}
            />
            }
            <span>{user.name}</span>
            <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
        </nav>
    );
};

export default UserLogued;