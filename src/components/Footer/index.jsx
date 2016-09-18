/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="copy">
                    Сайт учителя - Корлотяну Аллы Дмитриевны<br/>
                    При копировании ссылка на источник обязательна
                </div>
            </footer>
        )
    }
}