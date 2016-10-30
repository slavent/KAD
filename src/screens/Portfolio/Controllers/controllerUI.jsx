/**
 * @author Kozinet Svyatoslav
 */

export default class ControllerUI {
	/**
	 * инициализация скролла
	 */
	static initPhotoScrolling() {
		$( window ).on( "scroll", () => {
			let $img = $( ".js-port-photo" )
			let imgHeight = +$img.height()
			let blockHeight = +$( ".js-port-info" ).height()
			let val = +$( window ).scrollTop()

			if ( val < blockHeight - imgHeight ) {
				$( ".js-port-photo" ).css( {
					marginTop: val
				} )
			}
		} )
	}
}