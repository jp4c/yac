import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

export default class Messages extends Component {

    render() {
        return (

            <ScrollToBottom className="messages">
                {this.props.messages.map((message, i) => <div key={i}><Message message={message} nickname_local={this.props.nickname_local} /></div>)}
            </ScrollToBottom>

        )
    }
}
