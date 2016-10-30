/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import ControllerREST from "./Controllers/controllerREST"
import ControllerUI from "./Controllers/controllerUI"
import Loader from "components/Loader"

export default class Portfolio extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        ControllerREST.getData.call( this )
        ControllerUI.initPhotoScrolling()
    }

    render() {
        if ( !this.state.data ) return <Loader/>

        let {
            photo,
            title,
            desc
        } = this.state.data

        return (
            <div className="port">
                <div className="port__photo js-port-photo">
                    <img src={ photo }/>
                </div>
                <div className="port__info js-port-info">
                    <div className="port__title">{ title }</div>
                    <div className="port__desc" dangerouslySetInnerHTML={{ __html: desc }}></div>
                </div>
            </div>
        )
    }
}