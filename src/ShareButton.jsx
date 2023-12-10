import "./css/ShareButton.css";
import { useState } from "react";
import React from 'react';

export default function ShareButton() {
    const [btnContent, setBtnContent] = useState('Jump with a friend!');
    function share() {
        setBtnContent(() => {return (
            <React.Fragment>
                <input readOnly={true} id={"link"} type="text"/>
                <button id={"copy"}>Copy</button>
            </React.Fragment>
        )})
    }


    return (
        <button onClick={share} id={"share-button"}>{btnContent}</button>
    )
}