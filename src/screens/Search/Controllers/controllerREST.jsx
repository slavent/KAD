import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class ControllerREST {
    static searchPosts () {
        let searchKeyword = this.refs.searchKeyword.value

        if ( !searchKeyword ) {
            return
        }

        axios.get( API.SEARCH + searchKeyword ).then( r => this.setState( {
            data: Mapper.mapSearchResult( r.data )
        } ) ).catch( e => console.error( e ) )
    }
}
