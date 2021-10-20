import React from "react"
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import "./style.scss";

const Layout = ({children}) =>
    <div className="container">
        <Header/>
        <Nav/>
        <main>
            <Wrapper>
                {children}
            </Wrapper>
        </main>
        <Footer/>
    </div>

export default Layout
