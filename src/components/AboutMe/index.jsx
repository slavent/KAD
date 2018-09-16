import React from "react"
// import { Link } from "react-router"
import "./style.scss"

export default ( { photo, desc } ) =>
    <div className="about">
        <div className="about__photo">
            <img src={ photo }/>
        </div>
        <div className="box">
            { /*<div className="about__title">Обо мне</div>*/ }
            <div className="about__desc" dangerouslySetInnerHTML={ { __html: desc } }/>
        </div>
        { /*<Link to="/portfolio" className="about__link"/>*/ }
    </div>
