/**
 * @author: Kozinets Svyatoslav
 */
import PostList from "components/PostList"
import Props from "./props"

export default class Library extends React.Component {
    render() {
        return <PostList data={ this.props.data }/>
    }
}

Library.defaultProps = Props