/**
 * @author Kozinetz Svyatoslav
 */

export default class ControllerValidation {
	/**
	 * валидация данных при отправке
	 */
	static validateData( user, msg ) {
		let status = {
			type: "SUCCES",
			msg: null
		}

		if ( !user ) {
			status.type = "ERROR"
			status.msg = "Необходимо представиться"
		} else if ( !msg ) {
			status.type = "ERROR"
			status.msg = "Необходимо заполнить сообщение"
		} else {
			status.type = "SUCCES"
			status.msg = "Ваше сообщение успешно отправлено"
		}

		this.setState( {
			status
		} )

		return status.type === "ERROR"
	}
}