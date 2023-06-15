import foto from "../../assets/foto.png"
import "./home.css"
import Skills from "../../components/skills/Skills"
import Projects from "../../components/projects"
export default function Home(){
 
  return( 
    
    <>
      <Personalinfo/>
      <Skills />
      <Projects/>
    </>
  
  ) 
}
const Personalinfo = () => {
  console.log("hola");
  
  return(
    <section className="Personalinfo section">
      <picture className="image-container">
        <img className="Personalinfo-image" src={foto}/>
      </picture>
     
      <div className="Personalinfo-contact">
        <div className="main-info">
          <div>
            <h1 className="Personalinfo-name title">Juan Marcano</h1>
            <h3 className="text">aspirante</h3>
          </div>
        
          <div className="text">
            <div className="email">
              <span className="material-symbols-outlined">
          mail
              </span>  
              <h2>infoJuanMarcano@gmail.com</h2>
            </div>
            <div className="phone">
              <span className="material-symbols-outlined">
            call
              </span>
              <h2>(+58) 04248221022</h2> 

            </div>
          </div>
        </div>
        <p className="text">
        Desarrollador motivado, que está dispuesto a aprender y 
        crear aplicaciones de interfaz de usuario sobresalientes.
        </p>
      </div>
    </section>
  )
}