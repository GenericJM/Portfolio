import { useEffect, useState } from "react"
import "./projects.css"
import { projects, tag } from "./projects"
import usePage from "@/hooks/usePage"
import forward from "@/assets/svg/forward.svg"
import backward from "@/assets/svg/back.svg"

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
        keyword ? setProjects(projects.project.filter(x => x.tag.includes(keyword))) : setProjects(projects.project);

    }, [keyword]

    )
    return projectList;
}
export default function Projects() {
    //mover a un componente independiente
    const [key, setKey] = useState(null);
    const projectList = useProjects(key)
    const [pagination, page, lastPage, setPage] = usePage(projectList);

    return (
        <>
         <a name="projects"></a>            
            <header className="default projects__header">
                <h1 className="projects-title title">Projects ({projectList.length})</h1>
                <div className="project__filter">
                    {Object.values(tag).map(x =>
                        <button
                            style={x === key ? styles.buttonSelected : styles.button}
                            className="project__button-shape project__button-colors other-text"
                            onClick={() => { key != x ? setKey(x) : setKey(null) }}
                            key={x}>
                            {x}
                        </button>
                    )}
                </div>
            </header>
            <PageComponent setPage={setPage} page={page} lastPage={lastPage} />
            <section className="projects">
            
                {
                    pagination.map(content => {
                        return <Project content={content} setKey={setKey} key={content.link} />;
                    })
                }

            </section>
            <PageComponent setPage={setPage} page={page} lastPage={lastPage} />
        </>

    )

}
const Project = ({ content, setKey }) => {

    return <article className="project__element default">
        <picture>
            <img src={content.image} className="image"></img>

        </picture>

        <div className="project__element-div">
            <div>
                <div className="project__filter">{content.tag.map(tag => <button className="other-text project-tag" key={tag} onClick={() => { setKey(tag) }}>{tag}</button>)}</div>
                <h1 className="subtitle">{content.name}</h1>

            </div>
            <p className="text">{content.description} </p>
            <div className="project__filter">
                <button className="project__button-shape other-text" style={styles.buttonSelected} onClick={() => window.open(content.link)}>demo</button>
                <button className="project__button-shape project__button-code other-text" onClick={() => window.open(content.code)}>code</button>
            </div>

        </div>

    </article>
}
const PageComponent = ({ setPage, page, lastPage }) => {
    const handleNextPage = () => { setPage(prevPage => prevPage + 1) }
    const handlePrevPage = () => { setPage(prevPage => prevPage - 1) }
    return <section className="pageButtons">
        <a href="#projects">
            {page > 0 ?
                <button
                    className="project__button-shape project__button-colors other-text pageButton"
                    onClick={handlePrevPage}
                >
                    <img src={backward} className="movePage"></img>
                </button>
                :
                null
            }
        </a>
        <div className="nPage"> <label >{page + 1}</label></div>
        <a href="#projects">
            {!lastPage ?
                <button
                    className="project__button-shape project__button-colors other-text pageButton"
                    onClick={handleNextPage}
                >
                    <img src={forward} className="movePage"></img>
                </button>
                :
                null
            }
        </a>

    </section>
}
