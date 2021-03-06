import React from 'react';
import './WaveButton.css';
import { useAuth0 } from "@auth0/auth0-react";

const WaveButton = ({ handleClick }) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div className="wrapper">
            <span className="wave-btn" onClick={ loginWithRedirect }>
                <span className="wave-btn__text">Login or Sign Up</span>
                <span className="wave-btn__waves"></span>
            </span>
        </div>
    );
};

export default WaveButton;