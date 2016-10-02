/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"
import NavMap from "data/nav"

export default class Nav extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            data: NavMap
        }
    }

    /**
     * обработчик наведения мыши
     */
    __onMouseOver( index ) {
        let data = this.state.data
        data.map( ( item, i ) => {
            item.hovered = i === index ? true : false
        } )

        this.setState( {
            data
        } )
    }

    /**
     * обработчик уведения мыши
     */
    __onMouseOut() {
        let data = this.state.data
        data.map( ( item, i ) => {
            item.hovered = false
        } )

        this.setState( {
            data
        } )
    }

    /**
     * обработчик клика
     */
    __onClick( index ) {
        let data = this.state.data
        data.map( ( item, i ) => {
            item.active = i === index ? true : false
        } )

        this.setState( {
            data
        } )
    }

    /**
     * рендер подменю
     */
    __renderSubMenu( data ) {
        return (
            <ul className="submenu" style={{ display: data.hovered ? "block" : "none" }}> { data.children.map( ( item, i ) => {
                return <li key={ i }><Link to={ item.url }>{ item.title }</Link></li>
            } ) } </ul>
        )
    }

    render() {
        return (
            <nav>
                <div className="wrp">
                    <ul className="mainmenu">
                        { this.state.data.map( ( item, i ) => {
                            return (
                                <li 
                                    key={ i } 
                                    className={ item.active ? "active" : "" }
                                    onMouseOver={ this.__onMouseOver.bind( this, i ) }
                                    onMouseOut={ this.__onMouseOut.bind( this, i ) }>
                                    <Link to={ item.url } onClick={ this.__onClick.bind( this, i ) }>{ item.title }</Link>
                                    { item.children && item.children.length && this.__renderSubMenu( item ) }
                                </li>
                            )
                        } ) }
                    </ul>
                </div>
            </nav>
        )
    }
}