import { useEffect, useState } from "react"
import "./projects.css"
import { projects, tag } from "./projects"

const styles = {
    buttonSelected: {
        backgroundColor: "#2F80ED",
        color: "#fff",
        border: "1px solid #2F80ED"
    },
    button: {}
}
const useProjects = (keyword) => {
    console.log(keyword);
    const [projectList, setProjects] = useState(projects.project);
    useEffect(() => {
        keyword ? setProjects(projects.project.filter(x => x.tag.includes(keyword))):setProjects(projects.project);

    }, [keyword]

    )
    return projectList;
}
export default function Projects() {
    //mover a un componente independiente
    const [key, setKey] = useState(null);
    const projectList = useProjects(key)
    console.log(projectList)
    return (
        <>
            <header className="default projects__header">
                <h1 className="projects-title title">Projects ({projectList.length})</h1>
                <div className="project__filter">
                    {/*va con esto*/}
                    {Object.values(tag).map(x =>
                        <button
                            style={x === key ? styles.buttonSelected : styles.button}
                            className="project__button-shape project__button-colors"
                            onClick={() => { key!=x ? setKey(x):setKey(null)}}
                            key={x}>{x}
                        </button>
                    )}
                </div>
            </header>

            <section className="projects">
                {
                    projectList.map(content => {
                        return <Project content={content} key={content.link} />;
                    })
                }

            </section>

        </>

    )

}
const Project = ({ content }) => {
    
    return <article className="project__element default">
        <img src={content.image} className="image"></img>
        {/*modificar por componente*/}
        <div className="project__filter">{content.tag.map(tag => <a className="other-text" key={tag} href="">{tag}</a>)}</div>
        <h1 className="subtitle">{content.name}</h1>
        <p className="text">{content.description} </p>
        <div className="project__filter">
            <button className="project__button-shape" style={styles.buttonSelected} onClick={() => window.open(content.link)}>demo</button>
            <button className="project__button-shape project__button-code" onClick={() => window.open(content.code)}>code</button>
        </div>

    </article>
}