import React from "react"
import Box from "../Box/Box";
import "./style.scss"

const AboutMe = ({data: {picture, content}}) =>
    <Box>
        <div className="about">
            <div className="about__photo">
                <img src={`/files/${picture}`}/>
            </div>
            <div className="about__desc" dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    </Box>

export default AboutMe
