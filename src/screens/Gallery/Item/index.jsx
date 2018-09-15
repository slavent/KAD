import React from "react"
import Loader from "components/Loader"
import PhotoAlbum from "components/PhotoAlbum"
import ControllerREST from "./Controllers/controllerREST"

export default class Item extends React.Component {
    constructor ( props ) {
        super( props )

        this.state = {
            data: null
        }
    }

    componentDidMount () {
        let albumId = ( location.href.split( "?" ) )[ 1 ].split( "=" )[ 1 ]
        ControllerREST.getPhotos.call( this, albumId )
    }

    render () {
        return this.state.data ? <PhotoAlbum data={ this.state.data }/> : <Loader/>
    }
}
