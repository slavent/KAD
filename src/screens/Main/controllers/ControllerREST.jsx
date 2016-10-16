/**
 * @author: Kozinets Svyatoslav
 */
import * as Mapper from "utils/mapper"
import API from "utils/api"

export default class ControllerREST {
    /**
     * получение постов
     */
    static getPosts() {
        axios.get( API.GET_POSTS ).then( r => this.setState( {
            posts: Mapper.mapPosts( r.data )
        } ) ).catch( e => console.error( e ) )
    }

    /**
     * получение топовых постов
     */
    static getTopPosts() {}

    /**
     * рендер данных для блока Обо мне
     */
    static getAboutData() {
        axios.get( API.GET_ABOUT_ME ).then( r => this.setState( {
            aboutData: Mapper.mapAboutMe( r.data )
        } ) ).catch( e => console.error( e ) )
    }

    /**
     * получение данных об учениках
     */
    static getChildrenData() {
        axios.get( API.GET_CHILDREN ).then( r => this.setState( {
            childrenData: Mapper.mapDataForDatepicker( r.data )
        } ) ).catch( e => console.error( e ) )
    }

    /**
     * получение данных для опроса
     */
    static getPollData() {
        axios.get( API.GET_POLL ).then( r => this.setState( {
            pollData: Mapper.mapPoll( r.data )
        } ) ).catch( e => console.error( e ) )
    }
}