import React from "react"
import {Link} from "react-router-dom"
import useSound from "use-sound";
import music from "./ring.mp3"
import "./style.scss"

const Logo = () => {
    const [play] = useSound(music);

    return (
        <div>
            <Link to="/" className="logo" onClick={play}/>
            <Link to="/" className="logo__title"/>
        </div>
    )
}

export default Logo