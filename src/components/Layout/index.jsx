/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import Logo from "components/Logo"
import Nav from "components/Nav"
import CopyRights from "components/CopyRights"
import SocialButtons from "components/SocialButtons"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="main-wrp">
                    <header>
                        <Logo/>
                    </header>
                    <Nav/>
                    <main>
                        <div className="wrp">{ this.props.children }</div>
                    </main>
                </div>
                <footer>
                    <CopyRights/>
                    <SocialButtons/>
                </footer>
            </div>
        )
    }
}