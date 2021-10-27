import React from "react"
import Box from "../Box/Box";
import "./style.scss"

const AboutMe = ({photo = "http://peremenka20.ru/wp-content/uploads/2018/09/IMG_6011.jpg", content}) =>
    <Box>
        <div className="about">
            <div className="about__photo">
                <img src={photo}/>
            </div>
            <div className="about__desc" dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    </Box>

export default AboutMe
