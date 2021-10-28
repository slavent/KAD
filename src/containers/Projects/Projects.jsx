import React, {useEffect, useState} from "react"
import Box from "../../components/Box/Box";
import API from "../../contants/api";
import "./style.scss"

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const result = await fetch(API.GET_PROJECTS)
            const response = await result.json()

            setProjects(response)
        }

        getPosts()
    }, [])

    return (
        <Box>
            <div className="projects">
                {
                    projects.map((item, key) =>
                        <div className="project" key={key}>
                            <div className="project__title">
                                <a
                                    href={ item.link }
                                    target="_blank">
                                    {item.title}
                                </a>
                            </div>
                            <div className="project__pic">
                                <a
                                    href={ item.link }
                                    target="_blank">
                                    <img src={`/files/${item.picture}`} alt=""/>
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
        </Box>
    )
}

export default Projects