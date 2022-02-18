import React from 'react'
import Logo from "./Logo"
import Links from "./Links"
import BrightMode from "./BrightMode"
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
      <div className='container-navbar'>
        <Logo />
        <Links />
        <BrightMode />
      </div> 
    </nav>
  )
}
