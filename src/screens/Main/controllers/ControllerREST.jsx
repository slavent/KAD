import API from "utils/api"

export default class ControllerREST {
    static getPosts () {
        axios
            .get( API.GET_POSTS )
            .then( r => this.setState( {
                posts: r.data
            } ) )
            .catch( e => console.error( e ) )
    }

    static getMessages () {
        axios
            .get( API.GET_POSTS )
            .then( r => this.setState( {
                messages: r.data
            } ) )
            .catch( e => console.error( e ) )
    }

    static getGallery () {
        axios
            .get( API.GET_POSTS )
            .then( r => this.setState( {
                gallery: r.data
            } ) )
            .catch( e => console.error( e ) )
    }
}
