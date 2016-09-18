/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class PhotoAlbum extends React.Component {
    render() {
        return (
            <div className="album">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="album__item">
                            <img src={ item.photo }/>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}