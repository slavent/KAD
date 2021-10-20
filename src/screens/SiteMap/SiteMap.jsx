import React from "react"
import {Link} from "react-router-dom"
import data from "../../contants/nav"
import "./style.scss"

const SiteMap = () =>
    <ul className="map">
        {data.map((item, i) =>
            <li key={i}>
                <Link to={item.url}>
                    {item.title}
                </Link>
            </li>
        )}
    </ul>

export default SiteMap