import React from "react"
import { Link } from "react-router-dom"
import data from "../../contants/nav"
import "./style.scss"

const Nav = () =>
    <nav>
        <div className="wrp">
            <ul className="main-menu">
                { data && data.map( ( item, i ) => {
                    return (
                        <li key={ i }>
                            <Link to={ item.url }>
                                { item.title }
                            </Link>
                        </li>
                    )
                } ) }
            </ul>
        </div>
    </nav>

export default Nav
