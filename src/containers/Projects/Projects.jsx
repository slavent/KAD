import React from "react"
import Box from "../../components/Box/Box";
import "./style.scss"

const Projects = () => {
    return (
        <Box>
            <div className="projects">
                <div className="project">
                    <div className="project__title">
                        <a
                            href="https://docs.google.com/presentation/d/1Vc4jbN-CJYwkASrpyZslPNuRGItgi5ay/edit?usp=sharing&ouid=100147451493723572420&rtpof=true&sd=truehttps://docs.google.com/presentation/d/1Vc4jbN-CJYwkASrpyZslPNuRGItgi5ay/edit?usp=sharing&ouid=100147451493723572420&rtpof=true&sd=true"
                            target="_blank">
                            Один в поле не воин
                        </a>
                    </div>
                    <div className="project__pic">
                        <a
                            href="https://docs.google.com/presentation/d/1Vc4jbN-CJYwkASrpyZslPNuRGItgi5ay/edit?usp=sharing&ouid=100147451493723572420&rtpof=true&sd=truehttps://docs.google.com/presentation/d/1Vc4jbN-CJYwkASrpyZslPNuRGItgi5ay/edit?usp=sharing&ouid=100147451493723572420&rtpof=true&sd=true"
                            target="_blank">
                            <img src="http://peremenka20.ru/wp-content/uploads/2021/10/1.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project__title">
                        <a
                            href="https://docs.google.com/presentation/d/1ZV_Un77CT9-LKaTPpgoYBTS6ce9vBV44/edit?usp=sharing&ouid=100147451493723572420&rtpof=true&sd=true"
                            target="_blank">
                            Герои космоса в названии улиц г. Королева
                        </a>
                    </div>
                    <div className="project__pic">
                        <a
                            href="https://docs.google.com/presentation/d/1ZV_Un77CT9-LKaTPpgoYBTS6ce9vBV44/edit?usp=sharing&ouid=100147451493723572420&rtpof=true&sd=true"
                            target="_blank">
                            <img src="http://peremenka20.ru/wp-content/uploads/2021/10/2.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Projects