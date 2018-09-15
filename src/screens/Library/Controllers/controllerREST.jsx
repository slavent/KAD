import axios from "axios"
import * as Mapper from "utils/mapper"
import API from "utils/api"

let map = {
    "for-parents": "Для родителей",
    "for-teachers": "Для учителей",
    "for-children": "Ученикам"
}

export default class ControllerREST {
    /**
     * получение постов
     */
    static getPosts () {
        axios.get( API.GET_POSTS ).then( r => {
            let allPosts = Mapper.mapPosts( r.data )
            let catPosts = ControllerREST.getCategoryPosts.call( this, allPosts )

            this.setState( {
                allPosts,
                catPosts
            } )
        } ).catch( e => console.error( e ) )
    }

    /**
     * получение постов конкретной категории
     */
    static getCategoryPosts ( data ) {
        let category = location.href.split( "/" )[ 4 ]
        return _.filter( data || this.state.allPosts, item => map[ category ] === item.category )
    }
}
