import foto from "@/assets/artwork.png"
import "./home.css"
import Skills from "@/components/skills/Skills"
import Projects from "@/components/projects"
import Hobbies from "@/components/hobbies"
import Certificates from "@/components/certificates"
export default function Home() {

  return (

    <>
      <Personalinfo />
      <main className="main">
        <aside>
          <Skills />
          <Hobbies />
          <Certificates/>
        </aside>
        <div>
          <Projects />
        </div>
      </main>
      <Footer />

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
          Estoy buscando un puesto en un equipo de desarrollo web donde pueda usar mis habilidades y
          experiencia para contribuir al desarrollo de productos de alta calidad. Estoy motivado
          y siempre dispuesto a aprender cosas nuevas.
        </p>
      </section>
    </main>
  )
}
const Footer = () => {
  return <footer className="footer">
    <h5 class="text">created by <a target="_blank" href="https://devchallenges.io/portfolio/GenericJM">GenericJM</a> - devChallenges.io</h5>
  </footer>
}