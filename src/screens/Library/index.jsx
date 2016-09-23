/**
 * @author: Kozinets Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import PostList from "components/PostList"
import Loader from "components/Loader"
import Props from "./props"

export default class Library extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        ControllerREST.getPosts.call( this )
    }

    render() {
        return this.state.posts ? <PostList data={ this.state.posts }/> : <Loader/>
    }
}

Library.defaultProps = Props