// import React, { useState } from "react";
// import axios from "axios";

// function AskQuestion({ chatSessionId }) {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//       .post(`/ask/${chatSessionId}`, { question })
//       .then((response) => {
//         setAnswer(response.data.answer);
//       })
//       .catch((error) => {
//         console.error("Error asking question:", error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button type="submit">Ask</button>
//       </form>
//       {answer && <p>{answer}</p>}
//     </div>
//   );
// }

// export default AskQuestion;

import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AskQuestion() {
  const { chatSessionId } = useParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://127.0.0.1:5001/ask/${chatSessionId}/`, new URLSearchParams({ question }))
      .then((response) => {
        setAnswer(response.data.answer);
      })
      .catch((error) => {
        console.error("Error asking question:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      {answer && <p>{answer}</p>}
    </div>
  );
}

export default AskQuestion;
