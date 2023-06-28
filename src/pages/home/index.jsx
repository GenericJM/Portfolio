import foto from "@/assets/foto.png"
import "./home.css"
import Skills from "@/components/skills/Skills"
import Projects from "@/components/projects"
import Hobbies from "@/components/hobbies"
export default function Home() {

  return (

    <>
      <Personalinfo />
      <main className="main">
        <div>
          <Skills />
          <Hobbies />
          {/* https://www.freecodecamp.org/fcc9236c317-77b0-4702-adea-1ec384c4e2e2 */}
        </div>
        <div>
          <Projects />
        </div>
      </main>

    </>

  )
}
const Personalinfo = () => {

  return (
    <main className="Personalinfo section default">
      <picture className="image-container">
        <img className="Personalinfo-image" src={foto} />
      </picture>

      <section className="Personalinfo-contact">
        <div className="main-info">
          <div>
            <h1 className="Personalinfo-name title">Juan Marcano</h1>
            <h2 className="text">aspirante</h2>
          </div>

          <div className="text">
            <div className="email">
              <span className="material-symbols-outlined">
                mail
              </span>
              <h3>infoJuanMarcano@gmail.com</h3>
            </div>
            <div className="phone">
              <span className="material-symbols-outlined">
                call
              </span>
              <h3>(+58) 04248221022</h3>

            </div>
          </div>
        </div>
        <p className="text">
          Desarrollador motivado, que está dispuesto a aprender y
          crear aplicaciones de interfaz de usuario sobresalientes.
        </p>
      </section>
    </main>
  )
}