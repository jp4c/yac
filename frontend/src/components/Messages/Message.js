import React from 'react';

import './Message.css'
import Youtube from '../Youtube/Youtube';


const Message = ({ message: { nickname, message, time }, nickname_local }) => {
    let isSentByCurrentUser = false;


    const trimmedName = nickname.trim().toLowerCase();

    if (nickname_local.trim().toLowerCase() === trimmedName) {
        isSentByCurrentUser = true;
    }

    if (message.startsWith('/youtube')) {
        return (
            isSentByCurrentUser
                ? (
                    <div className="messageContainer justifyEnd">
                        <p className="sentText pr-10">{nickname_local}</p>
                        <div className="messageAndTimeContainer">
                            <div className="messageBox backgroundBlue">
                                <Youtube message={message} ></Youtube>
                            </div>
                            <p className="timeText colorDark">{time}</p>
                        </div>
                    </div>
                )
                :
                (
                    <div className="messageContainer justifyStart">
                        <p className="sentText pr-10">{nickname}</p>
                        <div className="messageAndTimeContainer">
                            <div className="messageBox backgroundLight">
                                <Youtube message={message} ></Youtube>
                            </div>
                            <p className="timeText colorDark">{time}</p>
                        </div>
                    </div>
                )
        );
    }
    else {
        return (
            isSentByCurrentUser
                ? (
                    <div className="messageContainer justifyEnd">
                        <p className="sentText pr-10">{nickname_local}</p>
                        <div className="messageAndTimeContainer">
                            <div className="messageBox backgroundBlue">
                                <p className="messageText colorWhite">{message}</p>
                            </div>
                            <p className="timeText colorDark">{time}</p>
                        </div>
                    </div>
                )
                : (
                    <div className="messageContainer justifyStart">
                        <p className="sentText pr-10 ">{nickname}</p>
                        <div className="messageAndTimeContainer">
                            <div className="messageBox backgroundLight">

                                <p className="messageText colorDark">{message}</p>
                            </div>
                            <p className="timeText colorDark">{time}</p>
                        </div>

                    </div>
                )
        );
    }
}
export default Message;