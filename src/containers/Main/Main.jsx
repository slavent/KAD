import React, {useEffect, useState} from "react"
import AboutMe from "../../components/AboutMe/AboutMe";
import Loader from "../../components/Loader/Loader";
import Posts from "../../components/Posts/Posts";
import API from "../../contants/api";

const Main = () => {
    const [posts, setPosts] = useState([])
    const [about, setAbout] = useState(null)

    useEffect(() => {
        const getPosts = async () => {
            const result = await fetch(API.GET_POSTS)
            const response = await result.json()

            setPosts(response)
        }

        const getAbout = async () => {
            const result = await fetch(API.GET_ABOUT_ME)
            const response = await result.json()

            setAbout(response)
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
                { about && <AboutMe data={about}/> }
            </div>
        </div>
    )
}

export default Main