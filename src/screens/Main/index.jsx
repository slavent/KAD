import React from "react"
import ControllerREST from "./controllers/ControllerREST"
import AboutMe from "../../components/AboutMe/AboutMe";
import Loader from "../../components/Loader/Loader";
import Posts from "../../components/Posts/Posts";

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        ControllerREST.getPosts.call(this)
        ControllerREST.getAboutMe.call(this)
    }

    render() {
        const {posts, about} = this.state

        if (!posts) {
            return <Loader/>
        }

        return (
            <div style={{display: "flex"}}>
                <div className="content">
                    <Posts data={this.state.posts}/>
                </div>
                <div className="sidebar">
                    <AboutMe photo={about.acf.image}/>
                </div>
            </div>
        )
    }
}
