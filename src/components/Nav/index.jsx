/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="wrp">
                    <ul>
                        <li><Link to="/portfolio">Портфолио</Link></li>
                        <li><Link to="/library">Копилка знаний</Link></li>
                        <li><Link to="/gallery">Фотогалерея</Link></li>
                        <li><Link to="/guestbook">Гостевая книга</Link></li>
                        <li><Link to="/sitemap">Карта сайта</Link></li>
                        <li><Link to="/search">Поиск</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}