import React from "react"
import Logo from "../Logo";
import Wrapper from "../Wrapper/Wrapper";

const Header = () =>
    <header>
        <Wrapper>
            <Logo/>
            <div className="tools"/>
        </Wrapper>
    </header>

export default Header