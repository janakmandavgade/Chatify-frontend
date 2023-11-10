import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ListOfSsn from "./ListOfSsn";
import './leftpanel.css';
import Cookies from 'js-cookie';
import axios from "axios";
import { useEffect, useState } from "react";


function LeftPanel({ chatSessionId, setChatSessionId, chatHistory, setChatHistory, token, setToken,currID, setCurrID }) {
    const [userID, setUserID] = useState("");

    useEffect(() => {
        const userIDFromLocalStorage = localStorage.getItem('userID');
        if (userIDFromLocalStorage) {
            setUserID(userIDFromLocalStorage);
        }
    }, []);

    console.log("Reached LeftPanel ", userID)
    return (
        <div className="mlp">
            <div className="menu"><h1>Menu</h1></div>
            <div className="listofssn">
            <button onClick={() => {
                                    console.log("Hellow Mellow");
                                    setCurrID("c48c2e21-165a-4b0b-bbdf-59caf32d1129")
                                }}>Hellow Mellow</button>
                <ListOfSsn chatSessionId={chatSessionId} setChatSessionId={setChatSessionId} currID={currID} setCurrID={setCurrID}/>
            </div>
        </div>

    );
}

export default LeftPanel;