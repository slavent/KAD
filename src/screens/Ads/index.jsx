/**
 * @author: Kozinets Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import PostList from "components/Posts"
import Loader from "components/Loader"

export default class Ads extends React.Component {
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
        return this.state.catPosts ? <PostList data={ this.state.catPosts }/> : <Loader/>
    }
}