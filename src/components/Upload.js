import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Upload({ chatSessionId, setChatSessionId, currID, setCurrID }) {
    
    const fileInput = useRef();
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const userID = Cookies.get('public_id');
    // useEffect(() => {
    //     token = Cookies.get('token');
    // }, []);

    const handleUpload = () => {
        if (!chatSessionId) {
            console.error("Chat session ID is not available.");
            return;
        }

        const formData = new FormData();
        formData.append("pdf", fileInput.current.files[0]);
        formData.append("chat_session_id", chatSessionId);

        axios
            .post(`http://127.0.0.1:5001/upload/${currID}/`, formData, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log("File uploaded:", response.data.filename);
                navigate(`/chat/${userID}`);
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
            });
    };

    return (
        <div>
            {chatSessionId && (
                <>
                    <input type="file" ref={fileInput} />
                    <button onClick={handleUpload}>Upload</button>
                </>
            )}
            {!chatSessionId && (
                <p>Please wait for the chat session to be initialized.</p>
            )}
        </div>
    );
}

export default Upload;