/**
 * @author: Kozinets Svyatoslav
 */
import "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js"
import "node_modules/magnific-popup/dist/magnific-popup.css"

export default class ControllerUI {
    static createGalleryPopups() {
        $( ".js-gallery" ).magnificPopup( {
            delegate: "a",
            type: "image",
            removalDelay: 300,
            mainClass: "mfp-fade",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [ 0, 1 ]
            },
            image: {
                titleSrc: function( item ) {
                    return item.el.attr( "title" )
                }
            }
        } )
    }
}