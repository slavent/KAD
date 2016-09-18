/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"
import Props from "./props"

export default class Nav extends React.Component {
    constructor( props ) {
        super( props )
        this.state = props
    }

    __onClick( index ) {
        let data = this.state.data
        data.map( ( item, i ) => {
            item.active = i === index ? true : false
        } )

        this.setState( {
            data
        } )
    }

    render() {
        return (
            <nav>
                <div className="wrp">
                    <ul>
                        { this.state.data.map( ( item, i ) => {
                            return (
                                <li key={ i } className={ item.active ? "active" : "" }>
                                    <Link to={ item.url } onClick={ this.__onClick.bind( this, i ) }>{ item.title }</Link>
                                </li>
                            )
                        } ) }
                    </ul>
                </div>
            </nav>
        )
    }
}

Nav.defaultProps = Props