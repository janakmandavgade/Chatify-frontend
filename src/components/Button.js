import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './button.css';
import Cookies from "js-cookie";

function Button({ chatSessionId, setChatSessionId, currID, setCurrID, userID }) {

    const token = Cookies.get('token');
    const createNewChatSession = () => {

        // console.log("user_id",user_id);
        console.log("user_id in button js", userID);
        axios
            .post('http://127.0.0.1:5001/new_chat/', { user_id: userID }, {
                headers: {
                    'x-access-token': token,
                    'userID': userID
                }
            })
            .then((response) => {
                console.log(response);

                // setChatSessionId(prevChatSessionId => [...prevChatSessionId, response.data.chat_session_id]);
                setChatSessionId([...chatSessionId, response.data.chat_session_id]);
                setCurrID(response.data.chat_session_id);
            })
            .catch((error) => {
                console.error(`Error creating new chat session: ${error}`);
            });
    };

    return (
        <div>
            <button className="button" onClick={createNewChatSession}>
                Create a new chat session
            </button>
        </div>
    );
}

export default Button;