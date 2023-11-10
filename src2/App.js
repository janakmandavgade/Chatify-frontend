// import ChatSessions from "./components/ChatSessions";
// import ChatMessages from "./components/ChatMessages";
// import ChatSession from "./components/ChatSessions";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import AskQuestion from "./components/AskQuestion";
// import FileUpload from "./components/FileUpload";
// import {
//   BrowserRouter as Router,
//   Route,
//   Navigate,
//   Routes,
// } from "react-router-dom";
// import { useParams } from "react-router-dom";

// function App() {
//   const [chatSessionId, setChatSessionId] = useState(null);

// //OLD AXIOS ROUTE KEEP IT COMMENTED
//   // Call the backend route to retrieve the current chat session ID when the component mounts
//   // useEffect(() => {
//   //   axios
//   //     .get("/get_chat_session_id")
//   //     .then((response) => {
//   //       if (response.data.chat_session_id) {
//   //         setChatSessionId(response.data.chat_session_id);
//   //       } else {
//   //         console.error(
//   //           "Error retrieving chat session ID:",
//   //           response.data.message
//   //         );
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error retrieving chat session ID:", error);
//   //     });
//   // }, []);

//   useEffect(() => {
//     axios
//       .get("/get_chat_session_id")
//       .then((response) => {
//         if (response.data.chat_session_id) {
//           setChatSessionId(response.data.chat_session_id);
//         } else {
//           console.error(
//             "Error retrieving chat session ID:",
//             response.data.message
//           );
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving chat session ID:", error);
//       });
//   }, []);

//   const handleFileUpload = (id) => {
//     setChatSessionId(id);
//   };

//   const handleViewChats = (id) => {
//     setChatSessionId(id);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             chatSessionId ? (
//               <ChatSessions onViewChats={handleViewChats} />
//             ) : (
//               <FileUpload onUpload={handleFileUpload} />
//             )
//           }
//         />
//         <Route
//           path="/chat/:chatSessionId"
//           element={
//             <>
//               <ChatMessages chatSessionId={chatSessionId} />
//               <AskQuestion chatSessionId={chatSessionId} />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import ChatSessions from "./components/ChatSessions";
// import ChatMessages from "./components/ChatMessages";
// import ChatSession from "./components/ChatSessions";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import AskQuestion from "./components/AskQuestion";
// import FileUpload from "./components/FileUpload";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";
// import { useParams } from "react-router-dom";

// function App() {
//   const [chatSessionId, setChatSessionId] = useState(null);
//   // const navigate = useNavigate(); // Add this line

//   useEffect(() => {
//     axios
//       .get("/get_chat_session_id")
//       .then((response) => {
//         if (response.data.chat_session_id) {
//           console.log("Chat session ID:", response.data.chat_session_id);
//           setChatSessionId(response.data.chat_session_id);
//         } else {
//           console.error(
//             "Error retrieving chat session ID:",
//             response.data.message
//           );
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving chat session ID:", error);
//       });
//   }, []);

//   const handleFileUpload = (id) => {
//     // setChatSessionId(id);
//     console.log("Uploaded file id:", id);
//     // navigate(`/chat/${id}`); // Navigate after setting the chatSessionId
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<FileUpload onUpload={handleFileUpload} />} />
//         <Route
//           path="/chat/:chatSessionId"
//           element={
//             <>
//               <ChatMessages chatSessionId={chatSessionId} />
//               <AskQuestion chatSessionId={chatSessionId} />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatSessions from "./components/ChatSessions";
import ChatMessages from "./components/ChatMessages";
import FileUpload from "./components/FileUpload";
import AskQuestion from "./components/AskQuestion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [chatSessionId, setChatSessionId] = useState(null);

  useEffect(() => {
    axios
      .get("/get_chat_session_id/")
      .then((response) => {
        if (response.data.chat_session_id) {
          setChatSessionId(response.data.chat_session_id);
        } else {
          console.error(
            "Error retrieving chat session ID:",
            response.data.message
          );
        }
      })
      .catch((error) => {
        console.error("Error retrieving chat session ID:", error);
      });
  }, []);

  const handleFileUpload = (id) => {
    console.log("Uploaded file id:", id);
    setChatSessionId(id); // Set the chatSessionId after the file is uploaded
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FileUpload
              chatSessionId={chatSessionId}
              setChatSessionId={setChatSessionId}
              onUpload={handleFileUpload}
            />
          }
        />
        <Route
          path="/chat/:chatSessionId"
          element={
            <>
              <ChatMessages chatSessionId={chatSessionId} />
              <AskQuestion chatSessionId={chatSessionId} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
