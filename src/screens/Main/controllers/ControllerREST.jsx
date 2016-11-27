/**
 * @author: Kozinets Svyatoslav
 */
import * as PostsActions from "actions/posts"
import * as Mapper from "utils/mapper"
import API from "utils/api"

const ControllerREST = SuperClass => class extends SuperClass {
    /**
     * получение постов
     */
    __getPosts() {
        axios.get( API.GET_POSTS ).then( r => {
            let data = Mapper.mapPosts( r.data )
            this.props.dispatch( PostsActions.getPosts( data ) )
        } ).catch( e => console.error( e ) )
    }

    /**
     * получение топовых постов
     */
    __getTopPosts() {}

    /**
     * рендер данных для блока Обо мне
     */
    __getAboutData() {
        axios.get( API.GET_ABOUT_ME ).then( r => this.setState( {
            aboutData: Mapper.mapAboutMe( r.data )
        } ) ).catch( e => console.error( e ) )
    }

    /**
     * получение данных об учениках
     */
    __getChildrenData() {
        axios.get( API.GET_CHILDREN ).then( r => this.setState( {
            childrenData: Mapper.mapDataForDatepicker( r.data )
        } ) ).catch( e => console.error( e ) )
    }

    /**
     * получение данных для опроса
     */
    __getPollData() {
        axios.get( API.GET_POLL ).then( r => this.setState( {
            pollData: Mapper.mapPoll( r.data )
        } ) ).catch( e => console.error( e ) )
    }
}

export default ControllerREST