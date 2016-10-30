/**
 * @author Kozinetz Svyatoslav
 */
import ControllerValidation from "./controllerValidation"

const API = "http://chat.peremenka20.ru/"

export default class ControllerREST {
	/**
	 * получение сообщений
	 */
	static getMessages() {
		axios.get( API ).then( r => {
			console.info( "[INFO] GET messages", r.data )
			this.setState( {
				messages: r.data
			} )
		} ).catch( e => console.error( e ) )
	}

	/**
	 * отправка сообщения
	 */
	static sendMsg() {
		let user = this.refs.user.value
		let msg = this.refs.msg.value
		let formData = new FormData()

		if ( ControllerValidation.validateData.call( this, user, msg ) ) return

		formData.append( "user", user )
		formData.append( "msg", msg )

		$.ajax( {
			"async": true,
			"crossDomain": true,
			"url": "http://chat.peremenka20.ru/",
			"method": "POST",
			"processData": false,
			"contentType": false,
			"mimeType": "multipart/form-data",
			"data": formData
		} ).done( r => {
			console.info( "[INFO] POST message", formData )

			let messages = this.state.messages
			messages.push( {
				user,
				msg
			} )

			this.setState( {
				messages
			} )

			this.refs.user.value = ""
			this.refs.msg.value = ""
		} )
	}
}