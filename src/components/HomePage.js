import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './homepage.css';

function HomePage({ setUserID }) {

    const navigate = useNavigate();

    useEffect(() => {
        const userIDFromLocalStorage = localStorage.getItem('userID');
        if (userIDFromLocalStorage) {
            setUserID(userIDFromLocalStorage);
        }
    }, []);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <button className="loginButton" onClick={handleLogin}>Log In</button>
                <button className="loginButton" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );


    // const handleLogin = () => {
    //     loginWithRedirect().then(() => {
    //         navigate("/chat");
    //     });
    // };

    // return (
    //     <div className="login-container">
    //         <div className="login-box">
    //             <button className="loginButton" onClick={handleLogin}>Log In</button>
    //         </div>
    //     </div>
    // );

    // return (
    //     <div class="login-container">
    //         <div class="login-box">
    //             <button className="loginButton" onClick={() =>
    //                 loginWithRedirect({
    //                     appState: { returnTo: "/chat" },
    //                 })}>Log In</button>
    //         </div>
    //     </div>
    // );
}
export default HomePage;