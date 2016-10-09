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
            allPosts: null,
            catPosts: null
        }
    }

    componentDidMount() {
        ControllerREST.getPosts.call( this )
    }

    componentWillReceiveProps() {
        this.setState( {
            catPosts: ControllerREST.getCategoryPosts.call( this )
        } )
    }

    render() {
        console.log( this.state.catPosts )
        return this.state.catPosts ? <PostList data={ this.state.catPosts }/> : <Loader/>
    }
}

Library.defaultProps = Props