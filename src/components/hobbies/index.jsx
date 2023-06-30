import "./hobbies.css"
import { hobbies } from "./hobbies"
export default function Hobbies() {
    return (
                 <section className="section default">
                <h1 className="title">Hobbies</h1>
                <article className="hobbies">
                    {useList(hobbies.hobbie, "hobbie")}
                </article>

            </section>  
    )
}
const useList = (hobbies, name) => {
    {
        return hobbies.map(x => {
            return <article key={x.name} className={name}>
                <img className="image" src={x.image}></img>
                <h2 className="subtitle">{x.name}</h2>
                <p className="text"> {x.description}</p>
            </article>

        })
    }
}