/**
 * @author: Kozinets Svyatoslav
 */
import PostList from "components/PostList"
import TopPosts from "components/TopPosts"
import AboutMe from "components/AboutMe"
import DatePicker from "components/Datepicker"
import Poll from "components/Poll"

export default class ControllerRender {
	/**
	 * рендер постов
	 */
	static renderPostList() {
		return <PostList data={ this.state.posts }/>
	}

	/**
	 * рендер топовых постов
	 */
	static renderTopPosts() {
		return <TopPosts data={ this.state.TopPosts }/>
	}

	/**
	 * рендер блока Обо мне
	 */
	static renderAboutInfo() {
		return <AboutMe data={ this.state.aboutData }/>
	}

	/**
	 * рендер календаря
	 */
	static renderDatePicker() {
		return <DatePicker/>
	}

	/**
	 * рендер опроса
	 */
	static renderPoll() {
		return <Poll data={ this.state.pollData }/>
	}
}