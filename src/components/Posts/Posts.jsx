import React from "react"
import { Link } from "react-router-dom"
import Box from "../Box/Box";
import "./style.scss"

const Posts = ( { data } ) =>
    <div className="posts">
        { data.map( ( { id, acf: { title, preview, image } }, index ) =>
            <Box key={ index }>
                <div className="posts__item">
                    <div className="posts__title">
                        <Link to={ "/posts/" + id }>{ title }</Link>
                    </div>
                    <div className="posts__photo">
                        <Link to={ "/posts/" + id }>
                            <img src={ image }/>
                        </Link>
                    </div>
                    <div
                        className="posts__desc"
                        dangerouslySetInnerHTML={ { __html: preview } }>
                    </div>
                    <div className="posts__more">
                        <Link to={ "/posts/" + id }>читать дальше</Link>
                    </div>
                </div>
            </Box>
        ) }
    </div>

export default Posts