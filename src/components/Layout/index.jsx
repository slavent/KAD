/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import Header from "components/Header"
import Nav from "components/Nav"
import Footer from "components/Footer"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Nav/>
                <main>
                    <div className="wrp">{ this.props.children }</div>
                </main>
                <Footer/>
            </div>
        )
    }
}