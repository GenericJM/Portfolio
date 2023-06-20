import { useState } from "react"
import "./projects.css"
import { projects,tag } from "./projects"

const styles= {
    buttonSelected: {
        backgroundColor: "#2F80ED",
        color: "#fff",
        border:"1px solid #2F80ED"
    },
    button: {}
}
export default function Projects() {
    const [key, setKey] = useState(tag.html);
  
    return (
        <>
            <header className="default projects__header">
                <h1 className="projects-title">Projects ({projects.project.length})</h1>
                <div className="project__filter">
                    {Object.values(tag).map(x =>
                        <button
                          style={x===key ? styles.buttonSelected:styles.button}
                            className="project__button-shape project__button-colors"
                            onClick={() => {setKey(x)}}
                            key={x}>{x}
                        </button>
                    )}    
                </div>
            </header>

            <section className="projects">
                {  
                    projects.project.filter(x => x.tag.includes(key)).map(content => {
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
        <div className="project__filter">{content.tag.map(tag => <a key={tag} href="">{tag}</a>)}</div>
        <h1>{content.name}</h1>
        <div className="project__filter">
            <button className="project__button-shape"style={styles.buttonSelected} onClick={()=>window.open(content.link)}>demo</button>
            <button className="project__button-shape project__button-code" onClick={()=>window.open(content.code)}>code</button>
        </div>

    </article>
}