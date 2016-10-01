/**
 * @author Kozinetz Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mappers"

export default class ControllerREST {
	static getLinks() {
		axios.get( API.GET_LINKS ).then( r => this.setState( {
			data: Mapper.mapLinks( r.data )
		} ) ).catch( e => console.error( e ) )
	}
}