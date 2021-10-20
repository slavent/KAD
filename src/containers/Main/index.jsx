import React, {useEffect, useState} from "react"
import AboutMe from "../../components/AboutMe/AboutMe";
import Loader from "../../components/Loader/Loader";
import Posts from "../../components/Posts/Posts";
import API from "../../contants/api";

const Main = () => {
    const [posts, setPosts] = useState([])
    const [aboutPic, setAboutPic] = useState("")

    useEffect(() => {
        const getPosts = async () => {
            const result = await fetch(API.GET_POSTS)

            setPosts(result.data)
        }

        const getAbout = async () => {
            const result = await fetch(API.GET_ABOUT_ME)

            setAboutPic(result.data)
        }

        getPosts()
        getAbout()
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