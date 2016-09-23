/**
 * @author: Kozinets Svyatoslav
 */
import * as Mapper from "utils/mapper"
import API from "utils/api"

export default class ControllerREST {
    static getPosts() {
        axios.get( API.GET_POSTS ).then( r => this.setState( {
            posts: Mapper.mapPosts( r.data )
        } ) ).catch( e => console.error( e ) )
    }

    static getTopPost() {}

    static getAboutData() {
        axios.get( API.GET_ABOUT_ME ).then( r => this.setState( {
            aboutData: Mapper.mapAboutMe( r.data )
        } ) ).catch( e => console.error( e ) )
    }
}