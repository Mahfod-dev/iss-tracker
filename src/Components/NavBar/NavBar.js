import React from 'react'
import Logo from './Logo'
import Links from './Links'
import BrightMode from './BrightMode'

import style from './NavBar.module.css'

export default function NavBar() {
	return (
		<nav>
			<div className={style.containerNavbar}>
				<Logo />
				<Links />
				<BrightMode />
			</div>
		</nav>
	)
}
