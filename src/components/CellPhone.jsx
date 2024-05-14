import React from "react";
import "../css/CellPhone.css";

function CellPhone() {
    return (
        <section className="phone">
            <div className="screen">
                <div className="top">
                    <div className="screen-space"></div>
                    <div className="info">
                        <div className="back-btn"></div>
                        <div className="chat-photo"></div>
                        <div className="chat-info"></div>
                        <div className="settings-btn"></div>
                    </div>
                </div>
                <div className="chat">
                    <div className="content">
                        <div className="message"></div>
                        <div className="message"></div>
                        <div className="photos">
                            <div className="photo">
                                <img src="" alt="" />
                            </div>
                            <div className="photo">
                                <img src="" alt="" />
                            </div>
                            <div className="photo">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="message me"></div>
                        <div className="message me"></div>
                        <div className="message"></div>
                        <div className="option"></div>
                        <div className="option"></div>
                    </div>
                    <div className="input">
                        <div className="placeholder"></div>
                        <div className="send-btn"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CellPhone;