import API from "utils/api"

export default class CotrollerREST {
    static getPostData ( postId ) {
        axios.get( API.GET_POST + postId ).then( r => this.setState( {
            data: r.data
        } ) ).catch( e => console.error( e ) )
    }
}
