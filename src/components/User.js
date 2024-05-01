import React from 'react'
import "./User.css"
import HouseIcon from '@mui/icons-material/House';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profil from '../Images/Idfb1.jpg'

  function User() {
    return (
      <div className="user" translate="no">
        <img src={profil} alt="" className="user__avatar"/>
        <h1 className="user__name">Franck Monge</h1>
        <p className="user__profession">Développeur Web Full-Stack Junior</p>
        <div className="user__infos">
            <p className="user__info"><HouseIcon />300 Avenue Amiral Collet<br/>83000 Toulon</p>
            <p className="user__info"><SmartphoneIcon /><a href="tel:+33612647582">06 12 64 75 82</a></p>
            <p className="user__info"><EmailIcon /><a href="mailto:franck.monge.pro@gmail.com">Franck.monge.pro@gmail.com</a></p>
            <p className="user__info"><GitHubIcon /><a href="https://github.com/Franckyroquai" target="_blank" rel="noreferrer" >https://github.com/Franckyroquai</a></p>
            <p className="user__info"><LinkedInIcon /><a href="https://www.linkedin.com/in/franck-monge-017070223/" target="_blank" rel="noreferrer" >https://www.linkedin.com/in/franck-monge-017070223/</a></p>
            
        </div>
      </div>
    )
  }

export default User
