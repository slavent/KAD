/**
 * @author: Kozinets Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class ControllerREST {
	/**
	 * получения данных
	 */
	static getData() {
		axios.get( API.GET_PORTFOLIO ).then( r => this.setState( {
			data: Mapper.mapPortfolio( r.data )
		} ) ).catch( e => console.error( e ) )
	}
}
