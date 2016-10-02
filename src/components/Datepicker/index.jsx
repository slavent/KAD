/**
 * @author Kozinetz Svyatoslav
 */
import "./style.scss"
import ControllerUI from "./Controllers/controllerUI"

let data = [ {
    id: 0,
    name: "Ivanov Ivan Ivanovich",
    date: "21/03/1891"
}, {
    id: 2,
    name: "Ivanov Ivan Ivanovich",
    date: "21/03/1891"
}, {
    id: 3,
    name: "Ivanov Ivan Ivanovich",
    date: "21/03/1891"
}, {
    id: 4,
    name: "Ivanov Ivan Ivanovich",
    date: "21/03/1891"
} ]

export default class DatePicker extends React.Component {
    componentDidMount() {
        ControllerUI.init()
        ControllerUI.higlightDate( data )
    }

    render() {
        return (
            <div className="datepicker">
                <div className="datepicker__title">Календарь дней рождений</div>
                <div className="datepicker__wrp">
                    <div className="datepicker__btn-next">&#8592;</div>
                    <div className="datepicker__subtitle"></div>
                    <div className="datepicker__btn-prev">&#8594;</div>
                </div>
                <table id="calendar2">
                    <thead>
                        <tr>
                            <td width="14.3%">Пн</td>
                            <td width="14.3%">Вт</td>
                            <td width="14.3%">Ср</td>
                            <td width="14.3%">Чт</td>
                            <td width="14.3%">Пт</td>
                            <td width="14.3%">Сб</td>
                            <td width="14.3%">Вс</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}