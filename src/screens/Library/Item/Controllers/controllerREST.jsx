/**
 * @author Kozinetz Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class CotrollerREST {
	static getPostData( postId ) {
		axios.get( API.GET_POSTS ).then(r => this.setState( {
			data: Mapper.mapPost( r.data, postId )
		} ) ).catch( e => console.error( e ) )
	}
}