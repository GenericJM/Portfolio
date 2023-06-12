import "./abilities.css"
const styles={ 
  skillBar:({width})=>({ 
    width,   
  })
}
export default function Abilities() {
    return(
      
      <section className="abilities section">
        <h1>FRONT END</h1>
        <Ability name={"react"} level={20} />
        <Ability name={"html"} level={80} />
        <Ability name={"css"} level={55} />
        <Ability name={"javascript"} level={50} />
      </section>
    )
  }
const Ability = ({ name, level }) => {     
  const width = level+"%";
    return(
      <div className="ability">
        <label>{name}</label>
        <div className="ability__bar"><div style={styles.skillBar({width})} className="ability__bar-background"></div></div>
        {/* <h3>{level}</h3> */}
      </div>
    )
  }