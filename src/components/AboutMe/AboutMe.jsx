import React from "react"
import Box from "../Box/Box";
import "./style.scss"

const AboutMe = ({photo}) =>
    <Box>
        <div className="about">
            <div className="about__photo">
                <img src={photo}/>
            </div>
            <div className="about__desc">
                Здравствуйте!<br/><br/>
                Меня зовут Алла Дмитриевна.<br/>
                Я учитель начальных классов.<br/>
                Очень рада видеть вас на моем сайте!
            </div>
        </div>
    </Box>

export default AboutMe
