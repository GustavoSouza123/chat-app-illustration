import React from "react";
import "../css/Message.css";

function Message({ text, type="text", sent="true", price, style, src }) {
    if(type === "text") {
        return (
            <div className="row" sent={sent} type={type} style={style}>
                <div
                    className="message"
                    type={type}
                    sent={sent}
                >
                    {text}
                </div>
            </div>
        );
    } else if(type === "image") {
        return (
            <div
                className="message"
                type={type}
                sent={sent}
            >
                <img src={src} alt="dog image" />
            </div>
        );
    } else if(type === "option") {
        return (
            <div className="row" sent={sent} type={type}>
                <div
                    className="message"
                    type={type}
                    sent={sent}
                >
                    <div className="radio-input" />
                    <div className="text">{text}</div>
                    <div className="price">${price}</div>
                </div>
            </div>
        );
    }
}

export default Message;