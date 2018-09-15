import API from "utils/api"

export default class ControllerREST {
    static getPhotos () {
        axios
            .get( API.GET_PHOTOS )
            .then( r => {
                this.setState( {
                    data: r.data
                } )
            } )
            .catch( e => console.error( e ) )
    }
}
