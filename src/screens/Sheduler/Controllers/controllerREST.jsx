import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class ControllerREST {
    static getData() {
        axios.get( API.GET_SHEDULER ).then( r => this.setState( {
            data: Mapper.mapSheduler( r.data )
        } ) ).catch( e => console.error( e ) )
    }
}
