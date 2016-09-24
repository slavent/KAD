/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import Logo from "components/Logo"
import Nav from "components/Nav"
import CopyRights from "components/CopyRights"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Logo/>
                </header>
                <Nav/>
                <main>
                    <div className="wrp">{ this.props.children }</div>
                </main>
                <footer>
                    <CopyRights/>
                </footer>
            </div>
        )
    }
}