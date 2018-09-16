import React from "react"
import "./style.scss"

export default ( { data: { image, title, category = "Статьи", description, post_file } } ) =>
    <div className="post">
        <div className="post__photo" style={ { background: "url(" + image + ")" } }>
            <div className="post__title">{ category }: { title }</div>
        </div>
        <div className="post__desc" dangerouslySetInnerHTML={ { __html: description } }/>
        { post_file && <a href={ post_file } className="post__download"/> }
        <div className="post__print" onClick={ window.print }/>
    </div>
