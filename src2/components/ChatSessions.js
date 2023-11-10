// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ChatSession from './ChatSession';

// function ChatSessions({ onViewChats }) {
//   const [chatSessions, setChatSessions] = useState([]);

//   useEffect(() => {
//     axios.get('/get_all_chat_sessions')
//       .then(response => {
//         setChatSessions(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching chat sessions:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {chatSessions.map(chatSession => (
//         <ChatSession key={chatSession.chat_session_id} chatSessionId={chatSession.chat_session_id} onViewChats={() => onViewChats(chatSession.chat_session_id)} />
//       ))}
//     </div>
//   );
// }

// export default ChatSessions;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatSession from "./ChatSession";

function ChatSessions({ onViewChats, userID, setUserID }) {
  const [chatSessions, setChatSessions] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5001/get_all_chat_sessions/", {
        params: {
          user_id: 'yourUserID',
        },
      })
      .then((response) => {
        setChatSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chat sessions:", error);
      });
  }, []);

  return (
    <div>
      {chatSessions.map((chatSession) => (
        <ChatSession
          key={chatSession.chat_session_id}
          chatSessionId={chatSession.chat_session_id}
          onViewChats={() => onViewChats(chatSession.chat_session_id)}
        />
      ))}
    </div>
  );
}

export default ChatSessions;
