import React from 'react'
import "./FormationsExperiences.css"
import dataFormations from "../datas/Formations"
import Formations from "./Formations"

function FormationsExperiences() {
  return (
    <>
      <Formations datas={dataFormations} />
    </>
  )
}

export default FormationsExperiences
