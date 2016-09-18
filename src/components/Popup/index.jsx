/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Popup extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            show: false
        }
    }

    componentWillReceiveProps( newProps ) {
        this.setState( {
            show: newProps.show
        } )
    }

    __onClick() {
        this.setState( {
            show: false
        } )
    }

    render() {
        return (
            <div 
                className="popup" 
                onClick={ this.__onClick.bind( this ) } 
                style={{ display: this.state.show ? "block" : "none" }}>
                <div className="popup__wrp">{ this.props.children }</div>
            </div>
        )
    }
}