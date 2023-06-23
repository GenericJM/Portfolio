import "./hobbies.css"
import { hobbies } from "./hobbies"
export default function Hobbies() {
    return (
        <section className="section default">
        
            <h1 className="title">Hobbies</h1>
            
            {hobbies.hobbie.map(x => { 
               return <article  key={x.name} className="hobbie">
                    <img className="image" src={x.image}></img>
                    <h2 className="subtitle">{x.name}</h2>
                    <p className="text"> {x.description}</p>
                </article>

            }) }
            </section>)
}