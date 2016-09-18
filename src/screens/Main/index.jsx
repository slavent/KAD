/**
 * @author: Kozinets Svyatoslav
 */
import ControllerRender from "./controllers/ControllerRender"

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="content">{ ControllerRender.renderNewsList.call( this ) }</div>
                <div className="sidebar">
                    { ControllerRender.renderTopPosts.call( this ) }
                    { ControllerRender.renderAboutInfo.call( this ) }
                </div>
            </div>
        )
    }
}