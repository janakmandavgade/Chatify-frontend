// import React from 'react';

// function ChatSession({ chatSessionId, onViewChats }) {
//   return (
//     <div>
//       <h2>{chatSessionId}</h2>
//       <button onClick={() => onViewChats(chatSessionId)}>View Chats</button>
//     </div>
//   );
// }

// export default ChatSession;

import React from "react";

function ChatSession({ chatSessionId, onViewChats }) {
  return (
    <div>
      <h2>{chatSessionId}</h2>
      <button onClick={() => onViewChats(chatSessionId)}>View Chats</button>
    </div>
  );
}

export default ChatSession;
