/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import ControllerUI from "./Controllers/controllerUI"

export default class PhotoAlbum extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            data: props.data
        }
    }

    componentDidMount() {
        ControllerUI.createGalleryPopups.call( this )
    }

    render() {
        return (
            <div className="album">
                { this.state.data.map( ( item, i ) => {
                    debugger
                    return (
                        <div key={ i } className="album__item js-gallery">
                            <a href={ item.sizes.large } title="1Б класс">
                                <img src={ item.sizes.thumbnail }/>
                            </a>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}