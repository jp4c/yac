import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Messages from '../Messages/Messages';
import './Room.css'

export default function Room() {
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    return (
        <div>
            <h1>Room</h1>
            <div className="messagesContainer">
                <Messages messages={messages} />
            </div>
            <div className="inputContainer">
                <input
                    placeholder="Type a message"
                    className="inputMessage"
                    value={message}
                    type="text"
                    onChange={(event) => setMessage(event.target.value)} />

                <button
                    className="sendButton"
                    onClick={e => {
                        setMessages([...messages, message])
                        setMessage('')
                    }}>
                    Send
                </button>

            </div>

        </div>
    );
}