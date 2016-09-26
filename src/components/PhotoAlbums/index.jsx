/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"

export default class PhotoAlbums extends React.Component {
    render() {
        return (
            <div className="albums">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="albums__item">
                            <img src={ item.cover } className="albums_photo"/>
                            <div className="albums__title">{ item.title }</div>
                            <Link to={{ pathname: "/gallery/item", query: { id: item.id } }} className="albums__link"></Link>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}