/**
 * @author: Kozinets Svyatoslav
 */
import PostList from "components/PostList"
import TopPosts from "components/TopPosts"
import AboutMe from "components/AboutMe"
import DatePicker from "components/Datepicker"
import Poll from "components/Poll"

export default class ControllerRender {
	static renderPostList() {
		return <PostList data={ this.state.posts }/>
	}

	static renderTopPosts() {
		return <TopPosts data={ this.state.TopPosts }/>
	}

	static renderAboutInfo() {
		return <AboutMe data={ this.state.aboutData }/>
	}

	static renderDatePicker() {
		return <DatePicker/>
	}

	static renderPoll() {
		return <Poll data={ this.state.pollData }/>
	}
}