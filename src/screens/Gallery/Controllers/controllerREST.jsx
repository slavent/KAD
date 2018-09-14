import API from "utils/api"
import axios from "axios"

export default class ControllerREST {
    static getPhotos () {
        axios.get( API.GET_GALLERY )
            .then( r => this.setState( {
                photos: r.data
            } ) )
            .catch( e => console.error( e ) )
    }
}
