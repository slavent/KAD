import React from "react"
import Logo from "components/Logo"
import Nav from "components/Nav"
import CopyRights from "components/CopyRights"
import SocialButtons from "components/SocialButtons"
import "./style.scss"

const Layout = ( { children } ) =>
    <div>
        <div className="main-wrp">
            <header>
                <Logo/>
                <div className="tools"></div>
            </header>
            <Nav/>
            <main>
                <div className="wrp">{ children }</div>
            </main>
        </div>
        <footer>
            <CopyRights/>
            <SocialButtons/>
        </footer>
    </div>

export default Layout
