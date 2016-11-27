/**
 * @author: Kozinets Svyatoslav
 */
import PostList from "components/PostList"
import TopPosts from "components/TopPosts"
import AboutMe from "components/AboutMe"
import DatePicker from "components/Datepicker"
import Poll from "components/Poll"

const ControllerRender = SuperClass => class extends SuperClass {
	/**
	 * рендер постов
	 */
	__renderPostList() {
		return <PostList data={ this.state.posts }/>
	}

	/**
	 * рендер топовых постов
	 */
	__renderTopPosts() {
		return <TopPosts data={ this.state.TopPosts }/>
	}

	/**
	 * рендер блока Обо мне
	 */
	__renderAboutInfo() {
		return <AboutMe data={ this.state.aboutData }/>
	}

	/**
	 * рендер календаря
	 */
	__renderDatePicker() {
		return <DatePicker data={ this.state.childrenData }/>
	}

	/**
	 * рендер опроса
	 */
	__renderPoll() {
		return <Poll data={ this.state.pollData }/>
	}
}

export default ControllerRender