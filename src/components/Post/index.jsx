import React from "react"
import "./style.scss"

export default ( { data: { photo, title, category, desc, post_file } } ) =>
    <div className="post">
        <div className="post__photo" style={ { background: "url(" + photo + ")" } }>
            <div className="post__title">{ category }: { title }</div>
        </div>
        <div className="post__desc" dangerouslySetInnerHTML={ { __html: desc } }/>
        { post_file && <a href={ post_file } className="post__download"/> }
        <div className="post__print" onClick={ window.print }/>
    </div>
