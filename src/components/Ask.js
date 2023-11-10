import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ask.css";
import Cookies from "js-cookie";

function Ask({ chatSessionId, setChatSessionId, currID, setCurrID, chatHistory, setChatHistory }) {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const token = Cookies.get('token');


    const handleSubmitOnClick = () => {
        setLoad(true)
        axios
            .post(`http://127.0.0.1:5001/ask/${currID}/`, new URLSearchParams({ question }), {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response);
                setAnswer(response.data.answer);
                setChatHistory(prevChatHistory => [...prevChatHistory, { question: question, answer: response.data.answer }]);
                setQuestion("");
                setLoad(false)
            })
            .catch((error) => {
                console.error(`Error sending question: ${error}`);
            });
    };

    const handleUpload = () => {
        navigate(`/upload/${currID}`);
    }

    return (
        <div>
            <div className="asktext">
                <h1>Ask a Question?</h1>
            </div>
            <input type="text" value={question} className="input-text" onChange={(e) => setQuestion(e.target.value)} />
            {load && <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="SOmething HERE" />}
            <button className="button" onClick={handleSubmitOnClick}>Ask</button>
            <button className="button" onClick={handleUpload}>
                Upload
            </button>
            {/* {answer && <div><h2>Answer:</h2><p>{answer}</p></div>} */}
        </div>
    );
}

export default Ask;