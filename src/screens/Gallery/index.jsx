/**
 * @author: Kozinets Svyatoslav
 */
import ControllerREST from "./Controllers/controllerREST"
import PhotoAlbums from "components/PhotoAlbums"
import Loader from "components/Loader"
import Props from "./props"

export default class Gallery extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            photos: null
        }
    }

    componentDidMount() {
        ControllerREST.getPhotos.call( this )
    }

    render() {
        return this.state.photos ? <PhotoAlbums data={ this.state.photos }/> : <Loader/>
    }
}

Gallery.defaultProps = Props