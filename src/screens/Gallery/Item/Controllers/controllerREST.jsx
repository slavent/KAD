/**
 * @author Kozinets Svyatoslav
 */
import API from "utils/api"
import * as Mapper from "utils/mapper"

export default class ControllerREST {
	/**
	 * получение данных для фотографии
	 */
	static getPhotos( albumId ) {
		axios.get( API.GET_PHOTOS ).then( r => {
			this.setState( {
				data: Mapper.mapPhotosByAlbumId( r.data, albumId )
			} )
		} ).catch( e => console.error( e ) )
	}
}
