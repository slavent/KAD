/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"
import NavMap from "data/nav"

export default class SiteMap extends React.Component {
    /**
     * рендер подразделов
     */
    __renderSubMenu( data ) {
        return (
            <ul> { data.children.map( ( item, i ) => {
                return <li key={ i }><Link to={ item.url }>{ item.title }</Link></li>
            } ) } </ul>
        )
    }

    render() {
        return (
            <ul className="map">
                { NavMap.map( ( item, i ) => {
                    return (
                        <li key={ i }>
                            <Link to={ item.url }>{ item.title }</Link>
                            { item.children && item.children.length && this.__renderSubMenu( item ) }
                        </li>
                    )
                } ) }
            </ul>
        )
    }
}