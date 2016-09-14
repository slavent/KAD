/**
 * @author: Kozinets Svyatoslav
 */
import NewsList from "components/NewsList"
import TopPosts from "components/TopPosts"
import AboutMe from "components/AboutMe"

export default class ControllerRender {
    static renderNewsList() {
        return <NewsList/>
    }

    static renderTopPosts() {
        return <TopPosts/>
    }

    static renderAboutInfo() {
        return <AboutMe/>
    }
}