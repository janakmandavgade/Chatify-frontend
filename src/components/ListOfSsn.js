import React from "react";
import './listofssn.css'


function ListOfSsn({ chatSessionId, setChatSessionId, currID, setCurrID }) {

        return (
            <div className="">
                {chatSessionId.map((id) => (
                    <button key={id} className="ssn-btn" onClick={() => {
                        setCurrID(id);
                        console.log(setCurrID(id))
                    }}>
                        {id}
                    </button>
                ))}
            </div>
        );

    }


export default ListOfSsn;