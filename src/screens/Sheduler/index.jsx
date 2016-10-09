/**
 * @author Kozinetz Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import Loader from "components/Loader"

export default class Sheduler extends React.Component {
	componentDidMount() {
		ControllerREST.getData.call( this )
	}

	render() {
		return this.state.data ? <div>123</div> : <Loader/>
	}
}