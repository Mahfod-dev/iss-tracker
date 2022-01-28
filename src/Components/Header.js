import React, { useState, useEffect } from 'react'

const getStorageTheme = () => {
	let theme = 'light-theme'
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme
}

const Header = () => {
	const [theme, setTheme] = useState(getStorageTheme))

	const toogleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme')
		} else {
			setTheme('light-theme')
		}
	}

	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme',theme)
	}, [theme])

	return (
		<div>
			<button onClick={toogleTheme}>Toogle</button>
		</div>
	)
}

export default Header
