/**
 * @author Kozinetz Svyatoslav
 */
import "./style.scss"
import ControllerREST from "./Controllers/controllerREST"
import {
	Link
} from "react-router"

export default class Search extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			data: null
		}
	}

	__onBtnSearchClick() {
		ControllerREST.searchPosts.call( this )
	}

	render() {
		let data = this.state.data

		return (
			<div className="search">
				<input type="text" ref="searchKeyword"/>
				<button onClick={ this.__onBtnSearchClick.bind( this ) }>Поиск</button>

				<div className="search__results">
					{ data && data.length && <div className="search__title">Результаты поиска:</div> }
					{ data && data.length ? data.map( ( item, i ) => {
						return (
							<div key={ i } className="search__item">
								<Link to="">{ i + 1 }. { item.title }</Link>
							</div>
						)
					} ) : <div className="search__nofound">По вашему запросу ничего не было найдено.</div> }
				</div>
			</div>
		)
	}
}