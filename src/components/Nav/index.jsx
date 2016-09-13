/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="wrp">
                    <ul>
                        <li><a href="">Портфолио</a></li>
                        <li><a href="">Копилка знаний</a></li>
                        <li><a href="">Фотогалерея</a></li>
                        <li><a href="">Гостевая книга</a></li>
                        <li><a href="">Карта сайта</a></li>
                        <li><a href="">Поиск</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}