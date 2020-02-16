import React, { Component } from 'react';

import Message from './Message';
export default class Messages extends Component {

    render() {
        return (
            
        <div>
            {this.props.messages.map((message, i) => <div key={i}><Message message={message} nickname_local={this.props.nickname_local} /></div>)}
        </div>
        
        )
    } 
}
