import React, { Component } from 'react';

import { connect } from 'react-redux'
import './Login.css'
import io from 'socket.io-client';

const ENDPOINT = 'https://chat-meltstudio-server.herokuapp.com';


class Login extends Component {


    constructor(props) {
        super(props)

        this.socket = io(ENDPOINT);
        this.socket.emit('get nicknames');

        this.socket.on('get nicknames', function (nicknames) {

            props.addNicknames(nicknames)
        });
    }

    onClickLogin(nickname) {


        if (this.isNickname(this.props.nicknames, nickname)) {
            alert('el nickname no esta disponible')
        } else {
            
          
            this.props.history.push('/Chat')
        }


    }
    isNickname(nicknames, nickname) {
        if (nicknames.length > 0) {

            let i = 0;
            while (i < nicknames.length) {
                if (nicknames[i].trim().toLowerCase() === nickname.trim().toLowerCase()) {
                    return true;
                }
                i++
            }
            return false
        }
    }
    render() {
        return (
            <div className="Container">
                <div className="loginContainer">
                    <h1>Login</h1>
                    <div >
                        <input placeholder="Nickname" className="loginInput" type="text" onChange={(event) => this.props.setNicknameLocal(event.target.value)} />
                    </div>

                    <button
                        className="LoginButton"
                        onClick={() => { this.onClickLogin(this.props.nickname) }}
                        type="button">
                        Sign in!
                    </button>

                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    
    return {
        nickname: state.nickname.nickname_local,
        nicknames: state.nickname.nicknameUsers


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setNicknameLocal: (nickname) => dispatch({ type: 'set_nickname', nickname }),
        addNicknames: (nicknames) => dispatch({ type: 'set_nicknames', nicknames }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)