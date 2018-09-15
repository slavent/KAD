import "./style.scss"
import { Link } from "react-router"
import NavMap from "./data"

export default class Nav extends React.Component {
    constructor ( props ) {
        super( props )

        this.state = {
            data: NavMap
        }
    }

    onMouseOver ( index ) {
        let data = this.state.data

        data.map( ( item, i ) => item.hovered = i === index )

        this.setState( {
            data
        } )
    }

    onMouseOut () {
        let data = this.state.data
        data.map( ( item, i ) => {
            item.hovered = false
        } )

        this.setState( {
            data
        } )
    }

    onClick ( index ) {
        let { data } = this.state

        data.map( ( item, i ) => item.active = i === index )

        this.setState( {
            data
        } )
    }

    renderSubMenu ( data, index ) {
        return (
            <ul className="submenu"
                style={ { display: data.hovered ? "block" : "none" } }>
                { data.children.map( ( item, i ) =>
                    <li key={ i }>
                        <Link to={ item.url } onClick={ this.onClick.bind( this, index ) }>
                            { item.title }
                        </Link>
                    </li>
                ) }
            </ul>
        )
    }

    render () {
        return (
            <nav>
                <div className="wrp">
                    <ul className="mainmenu">
                        { this.state.data.map( ( item, i ) => {
                            return (
                                <li
                                    key={ i }
                                    className={ item.active ? "active" : "" }
                                    onMouseOver={ this.onMouseOver.bind( this, i ) }
                                    onMouseOut={ this.onMouseOut.bind( this, i ) }>
                                    { item.children
                                        ? <a href="#" className="no-click">{ item.title }</a>
                                        : <Link to={ item.url }
                                                onClick={ this.onClick.bind( this, i ) }>{ item.title }</Link> }
                                    { item.children && item.children.length && this.renderSubMenu( item, i ) }
                                </li>
                            )
                        } ) }
                    </ul>
                </div>
            </nav>
        )
    }
}
