/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import Header from "components/Header"
import Nav from "components/Nav"
import NewsList from "components/NewsList"
import TopPosts from "components/TopPosts"
import AboutMe from "components/AboutMe"
import Footer from "components/Footer"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Nav/>
                <main>
                    <div className="wrp">
                        <div className="content">
                            <NewsList/>
                        </div>
                        <div className="sidebar">
                            <TopPosts/>
                            <AboutMe/>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}