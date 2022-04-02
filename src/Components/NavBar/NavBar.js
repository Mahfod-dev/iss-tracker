import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Links from './Links'
import BrightMode from './BrightMode'
import { Outlet } from 'react-router-dom'

import style from './NavBar.module.css'

export default function NavBar() {
	const [show, setShow] = useState(true)

	const controlNavBar = () => {
		if (window.scrollY > 90) {
			setShow(false)
		} else {
			setShow(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', controlNavBar)

		return () => {
			window.removeEventListener('scroll', controlNavBar)
		}
	}, [])

	return (
		<>
			<nav
				className={show ? `${style.sectionNav}` : `${style.sectionNavHiddenr}`}>
				<Logo />
				<Links />
				<BrightMode />
			</nav>
			<Outlet />
		</>
	)
}
