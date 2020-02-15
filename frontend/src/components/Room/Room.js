import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function Room() {
    const [nickname, setNickname] = useState('');


    return (
        <div>
            <h1>Room</h1>
            <div>
                <input placeholder="Nickname" type="text" onChange={(event) => setNickname(event.target.value)} />
            </div>
            
        </div>
    );
}