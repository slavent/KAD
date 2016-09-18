/**
 * @author: Kozinets Svyatoslav
 */
import Chat from "components/Chat"
import Props from "./props"

export default class GuestBook extends React.Component {
    render() {
        return <Chat data={ this.props.data }/>
    }
}

GuestBook.defaultProps = Props