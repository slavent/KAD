/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import Popup from "components/Popup"

export default class PhotoAlbum extends React.Component {
    constructor( props ) {
        super( props )
        this.state = props
    }

    __onClick( index ) {
        let data = this.state.data
        data.map( ( item, i ) => {
            item.show = i === index ? true : false
        } )

        this.setState( {
            data
        } )
    }

    render() {
        return (
            <div className="album">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="album__item">
                            <img src={ item.photo } onClick={ this.__onClick.bind( this, i ) }/>
                            <Popup show={ item.show }><img src={ item.bigPhoto }/></Popup>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}