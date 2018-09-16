import React from "react"
import ControllerRender from "./controllers/ControllerRender"
import ControllerREST from "./controllers/ControllerREST"
import Loader from "components/Loader"
import AboutMe from "components/AboutMe"

export default class Main extends React.Component {
    constructor ( props ) {
        super( props )

        this.state = {
            posts: null
        }
    }

    componentDidMount () {
        ControllerREST.getPosts.call( this )
        ControllerREST.getAboutMe.call( this )
    }

    render () {
        const { posts, about } = this.state

        if ( !posts ) {
            return <Loader/>
        }

        return (
            <div>
                <div className="content">
                    { ControllerRender.renderPostList.call( this ) }
                </div>
                <div className="sidebar">
                    <AboutMe photo={ about.acf.image }/>
                </div>
            </div>
        )
    }
}
