/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"

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
                    <div className="about__desc" dangerouslySetInnerHTML={{ __html: desc }}></div>
                </div>
                <Link to="/portfolio" className="about__link"></Link>
            </div>
        )
    }
}