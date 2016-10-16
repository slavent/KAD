/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
	Link
} from "react-router"

export default class Logo extends React.Component {
	componentDidMount() {
		// $( ".logo" ).mouseenter( () => {
		// 	var audio = document.getElementsByTagName( "audio" )[ 0 ]
		// 	audio.play()
		// } )
	}

	render() {
		return (
			<div>
        		{/*<audio className="ring">
					<source src="./ring.mp3"></source>
					Your browser isn't invited for super fun audio time.
				</audio>*/}
        		<Link to="/" className="logo"></Link>
        		<Link to="/" className="logo__title"></Link>
        	</div>
		)
	}
}