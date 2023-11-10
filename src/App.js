import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Upload from "./components/Upload";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cookies from "js-cookie";
import Button from "./components/Button";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
    const [chatSessionId, setChatSessionId] = useState([]);
    const [currID, setCurrID] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [userID, setUserID] = useLocalStorage("","userID");
    const [token, setToken] = useLocalStorage("","token");

    const navigate = useNavigate();

    useEffect(() => {
        const userIDFromLocalStorage = localStorage.getItem('userID');
        if (userIDFromLocalStorage) {
            setUserID(userIDFromLocalStorage);
        }
    }, []);

    useEffect(() => {
        const id = Cookies.get('public_id');
        const tken = Cookies.get('token');
        // console.log(id, tken, ":1st usefeect")
        if (id && tken) {
            setUserID(id);
            setToken(tken);
            // console.log("token value", token)
            // console.log("Public ID found in cookies app.js: ", userID);
        } else {
            console.log("Public ID not found in cookies");
        }
    }, []);

    // for testing purposes
    useEffect(() => {
        if (userID) {
            // console.log("token value", token)
            // console.log("Public ID found in cookies app.js: ", userID);
            // console.log("changed userid")
            // setUserID(Cookies.get('public_id'));
        }
    }, []);

    // const handleData = (value) => {
    //     setUserID(value);
    //     console.log("user id values in app.js is : ", value);
    //     console.log("app.js reached: ", userID);
    // };

    const getChatHistory = () => {
        console.log("getchathistory here outide loop");
        if (userID && currID && token) {
            console.log("getchathistory here");
            axios
                .get(`http://127.0.0.1:5001/get_chats/${currID}/`, {
                    headers: {
                        'x-access-token': token,
                        'userID': userID
                    }
                })
                .then((res) => {
                    if (Array.isArray(res.data)) {
                        setChatHistory(res.data);
                        // console.log("getchathistory here");
                        // setLoading(false);
                    } else {
                        console.error('Data is not an array:', res.data);
                    }
                })
                .catch((error) => {
                    console.error(`Error fetching chat history: ${error}`);
                });
        }
    }

    function get_all_chat_sessions() {
        console.log("getallsessions here");
        if (userID && token) {
            axios
                .get("http://127.0.0.1:5001/get_all_chat_sessions/", {
                    headers: {
                        'x-access-token': token,
                        'userID': userID
                    }
                })
                .then((response) => {
                    const ids = response.data.map(item => item.chat_session_id);
                    // console.log("Chat ids here", ids);
                    // ids.reverse();
                    setChatSessionId(ids);

                    setCurrID(ids[0]);

                    // console.log(chatSessionId);
                })
                .catch((error) => {
                    console.error(`Error fetching data: ${error}`);
                });
        }
    }
    // useEffect(() => {
    //     console.log("Fired off ueff in app.js for currID: ", currID);
    //     setCurrID(chatSessionId[0])
    // }, [currID]);

    const handleLogout = () => {
        // Clear all cookies
        const cookies = Cookies.get();
        for (let cookie in cookies) {
            Cookies.remove(cookie);
        }

        // Reset state variables
        setUserID("");
        setToken("");
        setCurrID("");
        setChatSessionId([]);
        setChatHistory([]);

        navigate("/")
    }

    useEffect(() => {
        if (userID && token) { // Check if userID and token are not empty
            get_all_chat_sessions();
        }
    }, [userID, token]);

    useEffect(() => {
        console.log("This effect was called");
        if (currID !== ""){
            getChatHistory();
            console.log("app.js chathistory called",chatHistory);
        }
        else
            console.log("currID is empty");

    }, [currID]);


    // if (loading === true) {
    //     return (
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     );
    // }
    // else {

    /*  */

    return (
        <Routes>
            <Route
                path="/chat/:userID"
                element={
                    <div>
                        <Header onLogout={handleLogout} />
                        <div className="grid">
                            <div className="LeftPanel">
                                <LeftPanel
                                    token={token}
                                    setToken={setToken}
                                    chatSessionId={chatSessionId}
                                    setChatSessionId={setChatSessionId}
                                    currID={currID}
                                    setCurrID={setCurrID}
                                    chatHistory={chatHistory}
                                    setChatHistory={setChatHistory}
                                userID={userID}
                                setUserID={setUserID}
                                />
                                <button onClick={() => {
                                    console.log("Hellow Mellow");
                                    setCurrID("c48c2e21-165a-4b0b-bbdf-59caf32d1129")
                                }}>Hellow Mellow</button>
                                <button onClick={() => {
                                    console.log("Hellow Mellow 2");
                                    setCurrID("7e6ac4ae-ba5f-41c4-8ddb-a067e602d30d")
                                }}>Hellow Mellow</button>
                            </div>
                            <div className="RightPanel">
                                <RightPanel chatSessionId={chatSessionId}
                                    setChatSessionId={setChatSessionId}
                                    currID={currID}
                                    setCurrID={setCurrID}
                                    chatHistory={chatHistory}
                                    setChatHistory={setChatHistory}
                                    userID={userID}
                                    setUserID={setUserID}
                                    token={token}
                                    setToken={setToken}
                                />
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            />
            <Route
                path="/upload/:id"
                element={
                    <div>
                        <Upload
                            chatSessionId={chatSessionId}
                            setChatSessionId={setChatSessionId}
                            currID={currID}
                            setCurrID={setCurrID}
                        />
                    </div>
                }
            />
            <Route
                path="/login"
                element={<Login userID={userID} setUserID={setUserID} />}
            />
            <Route
                path="/signup"
                element={<Signup />}
            />
            <Route
                path="/"
                element={<HomePage setUserID={setUserID} />
                }
            />
        </Routes>
    )
}
// }
export default App;