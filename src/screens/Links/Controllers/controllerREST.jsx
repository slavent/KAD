/**
 * @author Kozinetz Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class ControllerREST {
	/**
	 * получение ссылок
	 */
	static getLinks() {
		axios.get( API.GET_LINKS ).then( r => this.setState( {
			data: Mapper.mapLinks( r.data )
		} ) ).catch( e => console.error( e ) )
	}
}