import React from 'react'
import Logo from './Logo'
import Links from './Links'
import BrightMode from './BrightMode'
import { Outlet } from 'react-router-dom'

import style from './NavBar.module.css'

export default function NavBar() {
	return (
		<>
			<nav>
				<Logo />
				<Links />
				<BrightMode />
			</nav>
			<Outlet />
		</>
	)
}
