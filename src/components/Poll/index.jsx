/**
 * @author Kozinetz	Svyatoslav
 */
import "./style.scss"

export default class Poll extends React.Component {
	redner() {
		return (
			<div className="poll">
				<div className="poll__question">Вопрос на сегодня</div>
				<div className="poll__wrp">
					<div className="poll__answer"><input type="radio" name="answer"/>Answer 1</div>
					<div className="poll__answer"><input type="radio" name="answer"/>Answer 2</div>
					<div className="poll__answer"><input type="radio" name="answer"/>Answer 3</div>
					<div className="poll__answer"><input type="radio" name="answer"/>Answer 4</div>
				</div>
			</div>
		)
	}
}