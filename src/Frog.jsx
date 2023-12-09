import frogImg from './img/frog.png';
import './css/Frog.css';
import {useState} from "react";
export default function Frog() {
    const [isJump, setJump] = useState('');

    function jump() {
        setJump('jump');
        setTimeout(() => setJump(''), 500)
    }


    return (
        <img id={"frog"} onClick={jump} src={frogImg} className={isJump} alt="frog" />
    )
}