/**
 * @author Kozinetz Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import Loader from "components/Loader"

export default class Sheduler extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        ControllerREST.getData.call( this )
    }

    render() {
        return this.state.data ? <img src={ this.state.data } style={{ width: "100%" }}/> : <Loader/>
    }
}