import React, {useEffect, useState} from "react"
import Box from "../../components/Box/Box";
import API from "../../contants/api";

const About = () => {
    const [about, setAbout] = useState()

    useEffect(() => {
        const getAbout = async () => {
            const result = await fetch(API.GET_ABOUT_ME)
            const response = await result.json()

            setAbout(response)
        }

        getAbout()
    }, [])

    return (
        <Box>
            <div style={{display: "flex"}}>
                <div style={{flexBasis: "300px", margin: "0 20px 0 0"}}>
                    { about && <img src={`/files/${about.picture}`}/> }
                    <br/>
                </div>
                <div style={{flex: 1}}>
                    Здравствуйте!<br/><br/>
                    Меня зовут Алла Дмитриевна.<br/>
                    Я учитель начальных классов.<br/>
                    Очень рада видеть вас на моем сайте.
                </div>
            </div>
            { about && <div dangerouslySetInnerHTML={{__html: about.fullContent}}/> }
        </Box>
    )
}


export default About