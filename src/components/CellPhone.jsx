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
                        <Message text="esta é a minha primeira mensagem" sent="false" />
                        <Message text="e esta é outra mensagem aqui" sent="false" />
                        <div className="photos" sent="true">
                            <Message type="image" />
                            <Message type="image" />
                            <Message type="image" />
                        </div>
                        <Message text="Here are a few pictures. She's a happy girl" />
                        <Message text="Can you make it?" />
                        <Message text="She looks so happy! The time we discussed works. How long shall I take her out for?" sent="false" />
                        {/*<Message type="option" sent="false" />
                        <Message type="option" sent="false" /> */}
                    </div>
                    <Input />
                </div>
            </div>
        </section>
    );
}

export default CellPhone;