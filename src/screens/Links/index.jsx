/**
 * @author Kozinetz Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import Loader from "components/Loader"
import "./style.scss"

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
			this.state.data ? <div dangerouslySetInnerHTML={{ __html: this.state.data }} className="links"></div> : <Loader/>
		)
	}
}