/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="about__photo"><img src="http://lorempixel.com/300/400"/></div>
                <div className="box">
                    <div className="about__title">Обо мне</div>
                    <div className="about__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus placeat ducimus deleniti quibusdam, dolores rem, quam velit ex sint voluptatem veritatis non vero accusamus sequi officia. Praesentium, est, omnis!</div>
                </div>
            </div>
        )
    }
}