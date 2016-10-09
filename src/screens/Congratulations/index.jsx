/**
 * @author Kozinetz Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import Loader from "components/Loader"
import CongratList from "components/CongratList"

export default class Congratulations extends React.Component {
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
        return this.state.data ? <CongratList data={ this.state.data }/> : <Loader/>
    }
}