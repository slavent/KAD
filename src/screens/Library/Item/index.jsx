/**
 * @author: Kozinets Svyatoslav
 */
import Post from "components/Post"
import Props from "./props"

export default class Item extends React.Component {
    render() {
        return <Post data={ this.props.data }/>
    }
}

Item.defaultProps = Props