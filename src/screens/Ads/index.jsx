/**
 * @author Kozinetz Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import Loader from "components/Loader"
import AdsList from "components/AdsList"

export default class Ads extends React.Component {
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
        return this.state.data ? <AdsList data={ this.state.data }/> : <Loader/>
    }
}