/**
 * @author: Kozinets Svyatoslav
 */
import PostList from "components/PostList"
import TopPosts from "components/TopPosts"
import AboutMe from "components/AboutMe"
import DatePicker from "components/Datepicker"

export default class ControllerRender {
	static renderPostList() {
		return <PostList data={ this.state.posts }/>
	}

	static renderTopPosts() {
		return <TopPosts/>
	}

	static renderAboutInfo() {
		return <AboutMe data={ this.state.aboutData }/>
	}

	static renderDatePicker() {
		return <DatePicker/>
	}
}