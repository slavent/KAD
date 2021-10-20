import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios";
import API from "../../contants/api";
import Loader from "../Loader/Loader";
import "./style.scss"
import Box from "../Box/Box";

const Post = () => {
    const {id} = useParams()
    const [post, setPost] = useState()

    useEffect(() => {
        axios.get(API.GET_POST + id)
            .then(r => setPost(r.data.acf))
            .catch(e => console.error(e))
    }, [])


    if (!post) {
        return <Loader/>
    }

    const {image, title, description, post_file} = post

    return (
        <Box>
            <div className="post">
                <div className="post__title">{title}</div>
                <div className="post__photo" style={{background: "url(" + image + ")"}}/>
                <div className="post__desc" dangerouslySetInnerHTML={{__html: description}}/>
                {post_file && <a href={post_file} className="post__download"/>}
                <div className="post__print" onClick={window.print}/>
            </div>
        </Box>
    )
}

export default Post