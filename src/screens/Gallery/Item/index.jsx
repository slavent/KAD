/**
 * @author: Kozinets Svyatoslav
 */
import PhotoAlbum from "components/PhotoAlbum"
import Props from "./props"

export default class Item extends React.Component {
    render() {
        return <PhotoAlbum data={ this.props.data }/>
    }
}

Item.defaultProps = Props