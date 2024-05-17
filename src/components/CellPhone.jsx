import React from "react";
import Message from "../components/Message";
import Input from "../components/Input";
import "../css/CellPhone.css";
import arrowleft from "../assets/arrow-left.svg";
import avatar from "../assets/avatar.jpg";
import settings from "../assets/three-dots.svg";
import dog1 from "../assets/dog-image-1.jpg";
import dog2 from "../assets/dog-image-2.jpg";
import dog3 from "../assets/dog-image-3.jpg";

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
                        <Message text="That sounds great. I'd be happy with that." sent="false" />
                        <Message text="Could you send over some pictures of your dog, please?" sent="false" />
                        <div className="photos" sent="true">
                            <Message type="image" src={dog1} />
                            <Message type="image" src={dog2} />
                            <Message type="image" src={dog3} />
                        </div>
                        <Message text="Here are a few pictures. She's a happy girl!" />
                        <Message text="Can you make it?" style={{'marginBottom': '0'}} />
                        <Message text="She looks so happy! The time we discussed works. How long shall I take her out for?" sent="false" style={{'marginBottom': '16px'}} />
                        <Message type="option" sent="false" text="30 minute walk" price="29" />
                        <Message type="option" sent="false" text="1 hour walk" price="49" />
                    </div>
                    <Input />
                </div>
            </div>
        </section>
    );
}

export default CellPhone;