/**
 * @author Kozinetz Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import Loader from "components/Loader"

export default class Links extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			data: null
		}
	}

	componentDidMount() {
		ControllerREST.getLinks.call( this )
	}

	render() {
		return (
			this.state.data ? this.state.data.map( ( item, i ) => {
				console.log( item )
			} ) : <Loader/>
		)
	}
}