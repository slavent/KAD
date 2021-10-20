import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"

const Logo = () =>
    <div>
        <Link to="/" className="logo"/>
        <Link to="/" className="logo__title"/>
    </div>

export default Logo