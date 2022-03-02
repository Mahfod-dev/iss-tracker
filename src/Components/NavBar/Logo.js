import React from 'react'
import logo from "../../Assets/logo_160x75.png"
import style from './NavBar.module.css'



export default function Logo() {
  return (
    <div id={style.logo}><img src={logo} alt="logo" /></div>

  )
}
