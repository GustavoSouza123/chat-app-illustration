import React from "react";
import "../css/Message.css";

function Message({ text, type="text", sent="true" }) {
    return type != "image"
        ? (
            <div className="row" sent={sent} type={type}>
                <div
                    className="message"
                    type={type}
                    sent={sent}
                >
                    {text}
                </div>
            </div>
        )
        : (
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