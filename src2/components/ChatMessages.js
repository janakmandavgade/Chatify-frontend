// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ChatMessages({ chatSessionId }) {
//   const [chats, setChats] = useState([]);

//   useEffect(() => {
//     axios.get(`/get_chats/${chatSessionId}`)
//       .then(response => {
//         setChats(response.data.chats);
//       })
//       .catch(error => {
//         console.error('Error fetching chats:', error);
//       });
//   }, [chatSessionId]);

//   return (
//     <div>
//       {chats.map((chat, index) => (
//         <p key={index}>{chat}</p>
//       ))}
//     </div>
//   );
// }

// export default ChatMessages;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function ChatMessages() {
//   const { chatSessionId } = useParams();
//   const [chats, setChats] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://127.0.0.1:5001/get_chats/${chatSessionId}/`)
//       .then((response) => {
//         setChats(response.data.chats);
//       })
//       .catch((error) => {
//         console.error("Error fetching chats:", error);
//       });
//   }, [chatSessionId]);

//   return (
//     <div>
//       {chats.map((chat, index) => (
//         <p key={index}>{chat}</p>
//       ))}
//     </div>
//   );
// }

// export default ChatMessages;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ChatMessages() {
  const { chatSessionId } = useParams();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5001/get_chats/${chatSessionId}/`)
      .then((response) => {
        setChats(response.data.chats);
      })
      .catch((error) => {
        console.error("Error fetching chats:", error);
      });
  }, [chatSessionId]);

  return (
    <div>
      {chats.map((chat, index) => (
        <div key={index}>
          <p><strong>Question:</strong> {chat.question}</p>
          <p><strong>Answer:</strong> {chat.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;

