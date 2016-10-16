/**
 * @author: Kozinets Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import Loader from "components/Loader"
import Post from "components/Post"

export default class Item extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			data: null
		}
	}

	componentDidMount() {
		let postId = location.href.split( "/" )[ 4 ]
		ControllerREST.getPostData.call( this, postId )
	}

	render() {
		return this.state.data ? <Post data={ this.state.data }/> : <Loader/>
	}
}