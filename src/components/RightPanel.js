import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ChatHistory from "./ChatHistory";
import Ask from "./Ask";
import Upload from "./Upload";
import axios from "axios";
import Cookies from 'js-cookie';

function RightPanel({ chatSessionId, setChatSessionId, currID, setCurrID, chatHistory, setChatHistory, userID, setUserID, token, setToken }) {

    // useEffect(() => {
    //     setToken(Cookies.get('token'));
    //     setUserID(Cookies.get('public_id'));
    // }, [])


    // const getChatHistory = () => {
    //     console.log("currID: ", currID);
    //     if (userID && currID && token) {
    //         console.log("getchathistory here");
    //         console.log("chatsession id here", chatSessionId);
    //         currID = chatSessionId[0]
    //         axios
    //             .get(`http://127.0.0.1:5001/get_chats/${currID}/`, {
    //                 headers: {
    //                     'x-access-token': token,
    //                     'userID': userID
    //                 }
    //             })
    //             .then((res) => {
    //                 if (Array.isArray(res.data)) {
    //                     console.log("res data printed here in rightpanel ", res.data)
    //                     setChatHistory(res.data);
    //                     // console.log("getchathistory here");
    //                     // setLoading(false);
    //                 } else {
    //                     console.error('Data is not an array:', res.data);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error(`Error fetching chat history: ${error}`);
    //             });
    //     }
    // }

    // useEffect(() => {
    //     if (currID !== "")
    //         getChatHistory();
    //     else
    //         console.log("currID is empty");
    // }, [currID, userID, token]);


    return (
        <div>
            <div>
                <Ask chatSessionId={chatSessionId} setChatSessionId={setChatSessionId} currID={currID} setCurrID={setCurrID} chatHistory={chatHistory} setChatHistory={setChatHistory} />
            </div>
            <div>
                <ChatHistory 
                userID={userID}
                chatSessionId={chatSessionId} setChatSessionId={setChatSessionId} currID={currID} setCurrID={setCurrID} chatHistory={chatHistory} setChatHistory={setChatHistory} 
                token={token}
                />
            </div>

        </div>

    );
}

export default RightPanel;