import React from 'react';

import './Message.css'

const Message = ( {message: { nickname, message }, nickname_local}) => {
    let isSentByCurrentUser = false;
    

    const trimmedName = nickname.trim().toLowerCase();

    if (nickname_local.trim().toLowerCase() === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{nickname_local}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{message}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{message}</p>
                    </div>
                    <p className="sentText pl-10 ">{nickname}</p>
                </div>
            )
    );
}
export default Message;