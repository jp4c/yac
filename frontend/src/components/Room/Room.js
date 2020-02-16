import React, { Component } from 'react';
import { connect } from 'react-redux'

import Messages from '../Messages/Messages';
import io from 'socket.io-client';
import './Room.css'
const ENDPOINT = 'http://localhost:3030';
export class Room extends Component {


    constructor(props) {
        super(props);
        this.socket = io(ENDPOINT);
        this.socket.emit('add nickname', { nickname: props.nickname_local })

        this.socket.on('message', function (message) {
            props.setMessages(message)

        });
    }

    render() {
        return (
            <div>
                <h1>Room</h1>
                <div className="messagesContainer">
                    <Messages messages={this.props.messageHistory} nickname_local={this.props.nickname_local} />
                </div>
                <div className="inputContainer">
                    <input
                        placeholder="Type a message"
                        className="inputMessage"
                        value={this.props.message}
                        type="text"
                        onChange={(event) => this.props.setMessage(event.target.value)} />

                    <button
                        className="sendButton"
                        onClick={e => {



                            var today = new Date();
                            var min = today.getMinutes();
                            if (min <= 9) {
                                min = "0" + min
                            }
                            var time = today.getHours() + ":" + min + ":" + today.getSeconds();
                            this.socket.emit('send message', { message: this.props.message, time });
                            const message = { nickname: this.props.nickname_local, message: this.props.message, time }
                            this.props.setMessages(message)
                            this.props.setMessage('')
                        }}>
                        Send
                </button>

                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        message: state.message.message,
        messageHistory: state.message.messageHistory,
        nickname_local: state.nickname.nickname_local,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMessage: (message) => dispatch({ type: 'set_message', message }),
        setMessages: (message) => dispatch({ type: 'set_message_history', message }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Room)