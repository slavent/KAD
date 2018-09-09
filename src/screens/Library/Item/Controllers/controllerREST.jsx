/**
 * @author Kozinetz Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class CotrollerREST {
	/**
	 * получение данных поста
	 */
	static getPostData( postId ) {
		axios.get( API.GET_POST + postId ).then( r => this.setState( {
			data: Mapper.mapPost( r.data )
		} )  ).catch( e => console.error( e ) )
	}
}
