/**
 * @author: Kozinets Svyatoslav
 */
import {
    connect
} from "react-redux"
import ControllerRender from "./controllers/ControllerRender"
import ControllerREST from "./controllers/ControllerREST"
import Loader from "components/Loader"

class Main extends ControllerREST( ControllerRender( React.Component ) ) {
    constructor( props ) {
        super( props )
        this.state = {
            posts: null,
            topPosts: null,
            aboutData: null,
            childrenData: null,
            pollData: null
        }
    }

    componentDidMount() {
        this.__getPosts()
        this.__getTopPosts()
        this.__getAboutData()
        this.__getChildrenData()
            // ControllerREST.getPollData.call( this )
    }

    render() {
        let {
            posts,
            topPosts,
            aboutData,
            childrenData,
            // pollData
        } = this.state

        if ( !posts || !aboutData || !childrenData ) return <Loader/>

        return (
            <div>
                <div className="content">{ posts && this.__renderPostList() }</div>
                <div className="sidebar">
                    { topPosts && this.__renderTopPosts() }
                    { aboutData && this.__renderAboutInfo() }
                    { childrenData && this.__renderDatePicker() }
                    { this.__renderPoll() }
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return {
        posts: state.posts,
        children: state.children
    }
}

export default connect( mapStateToProps )( Main )