import React from "react"
import { Link } from "react-router"
import "./style.scss"

export default ( { data } ) =>
    <div className="albums">
        { data.map( ( { id, acf: { title, image } }, i ) => {
            return (
                <div key={ i } className="albums__item">
                    <img src={ image } className="albums_photo"/>
                    <div className="albums__title">{ title }</div>
                    <Link to={ {
                        pathname: "/gallery/item",
                        query: { id }
                    } } className="albums__link"/>
                </div>
            )
        } ) }
    </div>
