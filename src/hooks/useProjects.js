import { useEffect, useState } from "react"
import { projects } from "../components/projects/projects";
export default function useProjects(keyword) {    
    const [projectList, setProjects] = useState(projects.project);
    useEffect(() => {
        keyword ? setProjects(projects.project.filter(x => x.tag.includes(keyword))) : setProjects(projects.project);

    }, [keyword]

    )
    return projectList;
}