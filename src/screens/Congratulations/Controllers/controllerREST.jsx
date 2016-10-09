/**
 * @author Kozsinrtz Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class ControllerREST {
    /**
     * получение данных
     */
    static getData() {
        axios.get( API.GET_CONGRATULATIONS ).then( r => this.setState( {
            data: Mapper.mapCongratulations( r.data )
        } ) ).catch( e => console.error( e ) )
    }
}