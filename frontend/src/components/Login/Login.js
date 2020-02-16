import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import './Login.css'

function onClickLogin(e, nickname) {
    if (!nickname)
        e.preventDefault()


}


class Login extends Component {


    render() {
        return (
            <div className="Container">
                <div className="loginContainer">
                    <h1>Login</h1>
                    <div >
                        <input placeholder="Nickname" className="loginInput" type="text" onChange={(event) => this.props.addNickname(event.target.value)} />
                    </div>
                    <Link onClick={e => { onClickLogin(e, this.props.nickname) }} to="/Chat">
                        <button className="LoginButton" type="button"
                        >
                            Sign in!
                    </button>
                    </Link>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        nickname: state.nickname


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNickname: (nickname) => dispatch({ type: 'add_nickname', nickname }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)