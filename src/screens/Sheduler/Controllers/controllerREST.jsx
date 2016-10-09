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
		axios.get( GET_SHEDULER ).then( r => this.setState( {
			data: Mapper.mapSheduler( r.data )
		} ) ).catch( e => console.error( e ) )
	}
}