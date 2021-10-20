import React, {useEffect, useState} from "react"
import AboutMe from "../../components/AboutMe/AboutMe";
import Loader from "../../components/Loader/Loader";
import Posts from "../../components/Posts/Posts";
import axios from "axios";
import API from "../../contants/api";

const Main = () => {
    const [posts, setPosts] = useState([])
    const [aboutPic, setAboutPic] = useState("")

    useEffect(() => {
        axios
            .get(API.GET_POSTS)
            .then(r => setPosts(r.data))
            .catch(e => console.error(e))

        axios
            .get(API.GET_ABOUT_ME)
            .then(r => setAboutPic(r.data))
            .catch(e => console.error(e))
    }, [])

    if (!posts || !posts.length) {
        return <Loader/>
    }

    return (
        <div style={{display: "flex"}}>
            <div className="content">
                <Posts data={posts}/>
            </div>
            <div className="sidebar">
                <AboutMe photo={aboutPic}/>
            </div>
        </div>
    )
}

export default Main