import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function Login() {
    const [nickname, setNickname] = useState('');


    return (
        <div>
            <h1>Login</h1>
            <div>
                <input placeholder="Nickname" type="text" onChange={(event) => setNickname(event.target.value)} />
            </div>
            <Link to="/Chat">
                <button type="button">
                    Login!
                </button>
            </Link>
        </div>
    );
}