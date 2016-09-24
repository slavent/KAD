/**
 * @author: Kozinets Svyatoslav
 */

export default class SocialButtons extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center", "margin": "10px 0 0" }}>
                <script type="text/javascript">
                    {
                        ( function() {
                            if ( window.pluso )
                                if ( typeof window.pluso.start == "function" ) return;
                            if ( window.ifpluso == undefined ) {
                                window.ifpluso = 1;
                                var d = document,
                                    s = d.createElement( 'script' ),
                                    g = 'getElementsByTagName';
                                s.type = 'text/javascript';
                                s.charset = 'UTF-8';
                                s.async = true;
                                s.src = ( 'https:' == window.location.protocol ? 'https' : 'http' ) + '://share.pluso.ru/pluso-like.js';
                                var h = d[ g ]( 'body' )[ 0 ];
                                h.appendChild( s );
                            }
                        } )()
                    }
                </script>
                <div 
                    style={{ margin: "0 0 0 -12px" }}
                    className="pluso" 
                    data-background="transparent" 
                    data-options="medium,round,line,horizontal,nocounter,theme=04" 
                    data-services="vkontakte,odnoklassniki,facebook,twitter,google,moimir,email,print"></div>
            </div>
        )
    }
}