import React from 'react'
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./interests"
import Assets from "./Assets"

function Skills() {
  return (
    <>
        <div className="skills">
            <h2 className="h2">Compétences</h2>
            <Skill title="HTML" rating="5" />      
            <Skill title="CSS" rating="4" />      
            <Skill title="JavaScript" rating="3" />
            <Skill title="Angular" rating="3" />          
            <Skill title="React" rating="3" />
            <Skill title="Vue.JS" rating="3" />     
            <Skill title="Node.JS" rating="3" />      
        </div>
        <div className="skills">
            <h2 className="h2">Langues</h2>
            <Skill title="Anglais" rating="5" />      
            <Skill title="Espagnol" rating="3" />      
        </div>
        <Assets />
        <Interests />
    </>
  )
}

export default Skills
