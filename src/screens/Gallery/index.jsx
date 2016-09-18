/**
 * @author: Kozinets Svyatoslav
 */
import PhotoAlbums from "components/PhotoAlbums"
import Props from "./props"

export default class Gallery extends React.Component {
    render() {
        return <PhotoAlbums data={ this.props.data }/>
    }
}

Gallery.defaultProps = Props