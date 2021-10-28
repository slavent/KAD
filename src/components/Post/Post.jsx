import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import API from "../../contants/api";
import Loader from "../Loader/Loader";
import Box from "../Box/Box";
import "./style.scss"

const Post = () => {
    const {id} = useParams()
    const [post, setPost] = useState()

    useEffect(() => {
        const getPosts = async () => {
            const result = await fetch(API.GET_POST(id))
            const response = await result.json()

            setPost(response)
        }

        getPosts()
    }, [])


    if (!post) {
        return <Loader/>
    }

    const {picture, title, content, post_file} = post

    return (
        <Box>
            <div className="post">
                <div className="post__title">{title}</div>
                <div className="post__photo" style={{background: "url(/files/" + picture + ")"}}/>
                <div className="post__desc" dangerouslySetInnerHTML={{__html: content}}/>
                {post_file && <a href={post_file} className="post__download"/>}
                <div className="post__print" onClick={window.print}/>
            </div>
        </Box>
    )
}

export default Post