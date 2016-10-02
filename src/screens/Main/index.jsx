/**
 * @author: Kozinets Svyatoslav
 */
import ControllerRender from "./controllers/ControllerRender"
import ControllerREST from "./controllers/ControllerREST"

export default class Main extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            posts: null,
            topPosts: null,
            aboutData: null,
            pollData: null
        }
    }

    componentDidMount() {
        ControllerREST.getPosts.call( this )
        ControllerREST.getTopPosts.call( this )
        ControllerREST.getAboutData.call( this )
        ControllerREST.getPollData.call( this )
    }

    render() {
        let {
            posts,
            topPosts,
            aboutData,
            pollData
        } = this.state

        return (
            <div>
                <div className="content">{ posts && ControllerRender.renderPostList.call( this ) }</div>
                <div className="sidebar">
                    { topPosts && ControllerRender.renderTopPosts.call( this ) }
                    { aboutData && ControllerRender.renderAboutInfo.call( this ) }
                    { ControllerRender.renderDatePicker.call( this ) }
                    { pollData && ControllerRender.renderPoll.call( this ) }
                </div>
            </div>
        )
    }
}