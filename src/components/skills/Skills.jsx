import "./skills.css"
const styles={ 
  skillBar:({width})=>({ 
    width,   
  })
}
export default function Skills() {
    return(
      
      <section className="skills section default">
        <h1>FRONT END</h1>
        <Skill name={"react"} level={20} />
        <Skill name={"html"} level={80} />
        <Skill name={"css"} level={55} />
        <Skill name={"javascript"} level={50} />
      </section>
    )
  }
const Skill = ({ name, level }) => {     
  const width = level+"%";
    return(
      <div className="skill">
        <label>{name}</label>
        <div className="skill__bar"><div style={styles.skillBar({width})} className="skill__bar-background"></div></div>
        {/* <h3>{level}</h3> */}
      </div>
    )
  }