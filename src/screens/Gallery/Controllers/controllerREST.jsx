/**
 * @author: Kozinets Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class ControllerREST extends React.Component {
	/**
	 * получение фотографий
	 */
	static getPhotos() {
		axios.get( API.GET_PHOTOS ).then( r => this.setState( {
			photos: Mapper.mapPhotos( r.data )
		} ) ).catch( e => console.error( e ) )
	}
}