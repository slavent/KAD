/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Chat extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        axios.get( "http://chat.peremenka20.ru/" ).then( r => {
            this.setState( {
                messages: r.data
            } )
        } ).catch( e => console.error( e ) )
    }

    __onBtnSendClick() {
        let user = this.refs.user.value
        let msg = this.refs.msg.value
        let formData = new FormData()

        formData.append( "user", user )
        formData.append( "msg", msg )

        $.ajax( {
            "async": true,
            "crossDomain": true,
            "url": "http://chat.peremenka20.ru/",
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": formData
        } ).done( r => {
            let messages = this.state.messages
            messages.push( {
                user,
                msg
            } )

            this.setState( {
                messages
            } )

            this.refs.user.value = ""
            this.refs.msg.value = ""
        } )

        // axios.defaults.headers.post[ 'Content-Type' ] = 'multipart/form-data'
        // axios.post( "http://chat.peremenka20.ru/", {
        //     id: "4",
        //     date: "2016-10-03",
        //     user: "testUser",
        //     msg: "testMsg"
        // } ).then( r => {
        //     this.setState( {
        //         date: "2016-03-21",
        //         user: "123",
        //         msg: "qwrewer"
        //     } )
        // } ).catch( e => console.error( e ) )
    }

    render() {
        let {
            messages
        } = this.state

        return (
            <div className="chat">
                <div className="chat__title">
                    Уважаемые гости моего сайта! <br/>
                    Страничка создана для нашей связи.<br/>
                    Вы можете написать свои пожелания или задать мне интересующие Вас вопросы.
                </div>
                <div className="chat__form">
                    <div className="chat__label">Представьтесь:</div>
                    <input type="text" ref="user"/>
                    <div className="chat__label">Ваше сообщение:</div>
                    <textarea ref="msg"></textarea><br/>
                    <button onClick={ this.__onBtnSendClick.bind( this ) }>Отправить</button>
                </div>
                <div className="chat__box">
                    { messages && messages.length && messages.map( ( item, i ) => {
                        return (
                            <div key={ i } className="chat__item">
                                <div className="chat__author">{ item.user }</div>
                                <div className="chat__date"></div>
                                <div className="chat__msg">{ item.msg }</div>
                            </div>
                        )
                    } ) }
                </div>
            </div>
        )
    }
}