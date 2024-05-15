import React from "react";
import "../css/Input.css";
import arrowright from "../assets/arrow-right.svg";

function Input() {
    return(
        <div className="input">
            <div className="placeholder">Type a message...</div>
            <div className="send-btn">
                <img src={arrowright} alt="send button" />
            </div>
        </div>
    );
}

export default Input;