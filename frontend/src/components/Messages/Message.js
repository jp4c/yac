import React from 'react';

import './Message.css'

const Message = ({ message}) => {
    let isSentByCurrentUser = false;
/*
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
*/
    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">cualquiera</p>
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
                    
                </div>
            )
    );
}
export default Message;