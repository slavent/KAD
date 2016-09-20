/**
 * @author: Kozinets Svyatoslav
 */
import PostList from "components/PostList"
import TopPosts from "components/TopPosts"
import AboutMe from "components/AboutMe"

export default class ControllerRender {
    static renderPostList() {
        return <PostList data={ this.state.posts }/>
    }

    static renderTopPosts() {
        return <TopPosts/>
    }

    static renderAboutInfo() {
        return <AboutMe/>
    }
}