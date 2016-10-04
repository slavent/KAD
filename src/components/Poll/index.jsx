/**
 * @author Kozinetz	Svyatoslav
 */
import "./style.scss"

export default class Poll extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			result: false
		}
	}

	__onBtnPollClick() {
		this.setState( {
			result: true
		} )
	}

	render() {
		return (
			<div className="poll">
				<div className="poll__question">Зарегистрированны ли Вы на сайте dnevnik.ru?</div>
				{ !this.state.result
					&& <div className="poll__wrp">
					<div className="poll__answer"><input type="radio" name="answer" defaultChecked/>Да</div>
					<div className="poll__answer"><input type="radio" name="answer"/>Нет</div>
				</div> }
				{ this.state.result && <div>Спасибо, ваш голос учтен!</div> }
				{ !this.state.result && <button className="poll__btn" onClick={ this.__onBtnPollClick.bind( this ) }>Голосовать</button> }
			</div>
		)
	}
}