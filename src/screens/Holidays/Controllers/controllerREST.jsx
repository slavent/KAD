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
		axios.get( GET_HOLIDAYS ).then( r => this.setState( {
			data: Mapper.mapHolidays( r.data )
		} ) ).catch( e => console.error( e ) )
	}
}