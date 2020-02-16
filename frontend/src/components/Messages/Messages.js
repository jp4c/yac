import React from 'react';

import Message from './Message';
const Messages = ({ messages }) => (
    <div>
        {messages.map((message, i) => <div key={i}><Message message={message}  /></div>)}
    </div>
);

export default Messages;