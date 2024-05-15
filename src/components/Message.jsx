import React from "react";
import "../css/Message.css";

function Message({ text, type="text", sent="true" }) {
    return (
        <div
            className="message"
            type={type}
            sent={sent}
        >
            {text}
        </div>
    );
}

export default Message;