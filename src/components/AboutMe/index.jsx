/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class AboutMe extends React.Component {
    render() {
        let {
            photo,
            desc
        } = this.props.data

        return (
            <div className="about">
                <div className="about__photo"><img src={ photo }/></div>
                <div className="box">
                    <div className="about__title">Обо мне</div>
                    <div className="about__desc">{ desc }</div>
                </div>
            </div>
        )
    }
}