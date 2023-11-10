// import React, { useRef } from "react";
// import axios from "axios";

// function FileUpload({ chatSessionId, onUpload }) {
//   const fileInput = useRef();

//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append("pdf", fileInput.current.files[0]);
//     formData.append("chat_session_id", chatSessionId);

//     axios
//       .post(`/upload/${chatSessionId}`, formData)
//       .then((response) => {
//         console.log("File uploaded:", response.data.filename);
//         onUpload(chatSessionId); // Call the onUpload function with the chatSessionId
//       })
//       .catch((error) => {
//         console.error("Error uploading file:", error);
//       });
//   };

//   return (
//     <div>
//       <input type="file" ref={fileInput} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default FileUpload;

// import React, { useRef } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// function FileUpload({ chatSessionId, onUpload }) {
//   console.log('chatSessionId:', chatSessionId);
//   const fileInput = useRef();
//   const navigate = useNavigate();

//   const handleUpload = () => {
//     if (!chatSessionId) {
//       console.error("Chat session ID is not available.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("pdf", fileInput.current.files[0]);
//     formData.append("chat_session_id", chatSessionId);

//     axios
//       .post(`/upload/${chatSessionId}`, formData)
//       .then((response) => {
//         console.log("File uploaded:", response.data.filename);
//         onUpload(chatSessionId);
//         navigate(`/chat/${chatSessionId}`);
//       })
//       .catch((error) => {
//         console.error("Error uploading file:", error);
//       });

//   };

//   return (
//     <div>
//       {chatSessionId && (
//         <>
//           <input type="file" ref={fileInput} />
//           <button onClick={handleUpload}>Upload</button>
//         </>
//       )}
//       {!chatSessionId && <p>Please wait for the chat session to be initialized.</p>}
//     </div>
//   );
// }

// export default FileUpload;

import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FileUpload({ chatSessionId,setChatSessionId,onUpload }) {
  const fileInput = useRef();
  const navigate = useNavigate();

  const handleUpload = () => {
    if (!chatSessionId) {
      console.error("Chat session ID is not available.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", fileInput.current.files[0]);
    formData.append("chat_session_id", chatSessionId);

    axios
      .post(`http://127.0.0.1:5001/upload/${chatSessionId}/`, formData)
      .then((response) => {
        console.log("File uploaded:", response.data.filename);
        onUpload(chatSessionId);
        navigate(`/chat/${chatSessionId}`);
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
        <button onClick={() => {
          axios
          .post(`http://127.0.0.1:5001/new_chat/`)
          .then((response) => {
            console.log(response);
            // setChatSessionId(response.data.chat_session_id);
          })
        }}>
          Create a new chat session
        </button>
      )}
    </div>
  );
}

export default FileUpload;
