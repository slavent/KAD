import React from "react"
import ControllerRender from "./controllers/ControllerRender"
import ControllerREST from "./controllers/ControllerREST"
import Loader from "components/Loader"

export default class Main extends React.Component {
    constructor ( props ) {
        super( props )

        this.state = {
            posts: null
        }
    }

    componentDidMount () {
        ControllerREST.getPosts.call( this )
        // ControllerREST.getMessages.call( this )
        // ControllerREST.getGallery.call( this )
    }

    render () {
        const { posts } = this.state

        if ( !posts ) {
            return <Loader/>
        }

        return (
            <div>
                <div className="content">
                    { ControllerRender.renderPostList.call( this ) }
                </div>
                <div className="sidebar">
                </div>
            </div>
        )
    }
}
