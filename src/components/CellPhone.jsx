import React from "react";
import Message from "../components/Message";
import Input from "../components/Input";
import "../css/CellPhone.css";
import arrowleft from "../assets/arrow-left.svg";
import avatar from "../assets/avatar.jpg";
import settings from "../assets/three-dots.svg";

function CellPhone() {
    return (
        <section className="phone">
            <div className="screen">
                <div className="top">
                    <div className="screen-space"></div>
                    <div className="info">
                        <div className="back-btn">
                            <img src={arrowleft} alt="go back button" />
                        </div>
                        <div className="chat-photo">
                            <img src={avatar} alt="chat photo" />
                        </div>
                        <div className="chat-info">
                            <div className="name">Samuel Green</div>
                            <div className="status">Available to Walk</div>
                        </div>
                        <div className="settings-btn">
                            <img src={settings} alt="settings button" />
                        </div>
                    </div>
                </div>
                <div className="chat">
                    <div className="content">
                        <Message text="" sent="false" />
                        <Message text="" sent="false" />
                        <div className="photos">
                            <Message type="image" />
                            <Message type="image" />
                            <Message type="image" />
                        </div>
                        <Message text="" />
                        <Message text="" />
                        <Message text="" sent="false" />
                        <Message type="option" sent="false" />
                        <Message type="option" sent="false" />
                    </div>
                    <Input />
                </div>
            </div>
        </section>
    );
}

export default CellPhone;