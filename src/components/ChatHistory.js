import React, { useEffect, useState } from "react";
import axios from "axios";
import "./chathistory.css";

function ChatHistory({ chatSessionId, setChatSessionId, currID, setCurrID, chatHistory, setChatHistory,token, userID }) {

    // useEffect(() => {
    //     axios
    //         .get(`http://127.0.0.1:5001/get_chats/${currID}`, {
    //             headers: {
    //                 "x-access-token": token,
    //                 "userID": userID
    //             },
    //         })
    //         .then((res) => {
    //             if (Array.isArray(res.data)) {
    //                 setChatHistory(res.data);
    //             } else {
    //                 console.error("Data is not an array:", res.data);
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(`Error fetching chat history: ${error}`);
    //         });
    // }, [currID, token, userID]);

    return (
        <div className="chatbox">
            {[...chatHistory].reverse().map((chat, index) => (
                <div key={index} className="chatHistory">
                    <div className="chat-bubble question">
                        <p><strong>Question:</strong> {chat.question}</p>
                    </div>
                    <div className="chat-bubble answer">
                        <p><strong>Answer:</strong> {chat.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChatHistory;
