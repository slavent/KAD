/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import ControllerREST from "./Controllers/controllerREST"

export default class Chat extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            messages: [],
            status: {
                type: "SUCCESS",
                msg: null
            }
        }
    }

    componentDidMount() {
        ControllerREST.getMessages.call( this )
    }

    __onBtnSendClick() {
        ControllerREST.sendMsg.call( this )
    }

    render() {
        let {
            messages,
            status
        } = this.state

        return (
            <div className="chat">
                <div className="chat__title">
                    Уважаемые гости моего сайта! <br/>
                    Страничка создана для нашей связи.<br/>
                    Вы можете написать свои пожелания или задать мне интересующие Вас вопросы.
                </div>
                <div className="chat__form">
                    { status && status.msg && <div className={ "chat__status chat__status-" + status.type }>{ status.msg }</div> }
                    <div className="chat__label">Представьтесь:</div>
                    <input type="text" ref="user"/>
                    <div className="chat__label">Ваше сообщение:</div>
                    <textarea ref="msg"></textarea><br/>
                    <button onClick={ this.__onBtnSendClick.bind( this ) }>Отправить</button>
                </div>
                <div className="chat__box">
                    { ( messages && messages.length ) ? messages.map( ( item, i ) => {
                        return (
                            <div key={ i } className="chat__item">
                                <div className="chat__author">{ item.user }</div>
                                <div className="chat__date"></div>
                                <div className="chat__msg">{ item.msg }</div>
                            </div>
                        )
                    } ) : null }
                </div>
            </div>
        )
    }
}