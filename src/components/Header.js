import React from 'react';
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from 'js-cookie';

function Header({ onLogout }) {

    const navigate = useNavigate();
    // const { logout } = useAuth0();

    return (
        <div className="header">
            <img src={require('./chatifyai-high-resolution-logo-transparent.png')} alt="Logo" className="logo" />
            <div className="text"><strong>Chatify Your Life UP!</strong></div>
            <nav>
                <button className='Button' onClick={onLogout}>
                    Log Out
                </button>
            </nav>
            {/* <div className="text">Made with ❤️ BY Janak Mandavgade</div> */}
        </div>
    );
}

export default Header;
