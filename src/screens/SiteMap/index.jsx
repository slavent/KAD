import "./style.scss"
import { Link } from "react-router"
import data from "data/nav"

export default class SiteMap extends React.Component {
    render () {
        return (
            <ul className="map">
                { data.map( ( item, i ) => {
                    return (
                        <li key={ i }>
                            <Link to={ item.url }>{ item.title }</Link>
                            {
                                item.children && item.children.length &&
                                <ul>
                                    { data.children.map( ( { url, title }, index ) =>
                                        <li key={ index }>
                                            <Link to={ url }>{ title }</Link>
                                        </li>
                                    ) }
                                </ul>
                            }
                        </li>
                    )
                } ) }
            </ul>
        )
    }
}
