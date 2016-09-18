/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Chat extends React.Component {
    __onBtnSendClick() {
        console.log( 123 );
    }

    render() {
        return (
            <div className="chat">
                <div className="chat__form">
                    <div className="chat__label">Представьтесь:</div>
                    <input type="text"/>
                    <div className="chat__label">Ваше сообщение:</div>
                    <textarea></textarea><br/>
                    <button onClick={ this.__onBtnSendClick.bind( this ) }>Отправить</button>
                </div>
                <div className="chat__box">
                    { this.props.data.map( ( item, i ) => {
                        return (
                            <div key={ i } className="chat__item">
                                <div className="chat__author">{ item.author }</div>
                                <div className="chat__date">{ item.date }</div>
                                <div className="chat__msg">{ item.msg }</div>
                            </div>
                        )
                    } ) }
                </div>
            </div>
        )
    }
}