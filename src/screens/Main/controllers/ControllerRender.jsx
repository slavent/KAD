import PostList from "components/PostList"

export default class ControllerRender {
    static renderPostList () {
        return <PostList data={ this.state.posts }/>
    }
}
