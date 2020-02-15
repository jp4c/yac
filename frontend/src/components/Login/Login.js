import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css'

export default function Login() {
    const [nickname, setNickname] = useState('');


    return (
        <div className="Container">
            <div className="loginContainer">
                <h1>Login</h1>
                <div >
                    <input placeholder="Nickname"  className="loginInput"  type="text" onChange={(event) => setNickname(event.target.value)} />
                </div>
                <Link to="/Chat">
                    <button className="button" type="button">
                        Sign in!
                    </button>
                </Link>
            </div>
        </div>
    );
}