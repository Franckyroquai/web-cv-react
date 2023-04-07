import React from 'react'
import "./User.css"
import HouseIcon from '@mui/icons-material/House';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import profil from '../Images/Idfb3.jpg'

  function User() {
    return (
      <div className="user">
        <img src={profil} alt="" className="user__avatar"/>
        <h1 className="user__name">Franck Monge</h1>
        <p className="user__profession">Développeur Web</p>
        <div className="user__infos">
            <p className="user__info"><HouseIcon />300 Avenue Amiral Collet<br/>83000 Toulon</p>
            <p className="user__info"><SmartphoneIcon /><a href="tel:+33612647582">06 12 64 75 82</a></p>
            <p className="user__info"><EmailIcon /><a href="mailto:franckyroquai@gmail.com">Franckyroquai@gmail.com</a></p>
            
        </div>
      </div>
    )
  }

export default User
