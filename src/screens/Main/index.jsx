/**
 * @author: Kozinets Svyatoslav
 */
import ControllerRender from "./controllers/ControllerRender"
import ControllerREST from "./controllers/ControllerREST"
import Loader from "components/Loader"

export default class Main extends React.Component {
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
        ControllerREST.getPosts.call( this )
        ControllerREST.getTopPosts.call( this )
        ControllerREST.getAboutData.call( this )
        ControllerREST.getChildrenData.call( this )
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
                <div className="content">{ posts && ControllerRender.renderPostList.call( this ) }</div>
                <div className="sidebar">
                    { topPosts && ControllerRender.renderTopPosts.call( this ) }
                    { aboutData && ControllerRender.renderAboutInfo.call( this ) }
                    { childrenData && ControllerRender.renderDatePicker.call( this ) }
                    { ControllerRender.renderPoll.call( this ) }
                </div>
            </div>
        )
    }
}