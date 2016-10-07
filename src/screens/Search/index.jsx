/**
 * @author Kozinetz Svyatoslav
 */
import "./style.scss"

export default class Search extends React.Component {
	render() {
		return (
			<div className="search">
				<input type="text"/>
				<button>Поиск</button>
			</div>
		)
	}
}