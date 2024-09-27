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
            <Skill title="Git / GitHub" rating="4" />      
            <Skill title="HTML" rating="5" />      
            <Skill title="CSS" rating="4" />      
            <Skill title="Algorithmique" rating="3" />
            <Skill title="JavaScript" rating="3" />
            <Skill title="Méthode Merise" rating="4" />
            <Skill title="Node.JS" rating="3" />      
            <Skill title="Vue.JS" rating="3" />     
            <Skill title="React" rating="3" />
            <Skill title="Angular" rating="3" />          
            <Skill title="PHP" rating="3" />
            <Skill title="Symfony" rating="3" />      
            <Skill title="WordPress" rating="4" />      
            <Skill title="UI / UX" rating="3" />           
            <Skill title="SEO" rating="3" />           
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
