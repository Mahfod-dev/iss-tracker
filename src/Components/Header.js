import React, { useState, useEffect } from 'react'

const Header = () => {
	const [theme, setTheme] = useState('light-theme')

	const toogleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme')
		} else {
			setTheme('light-theme')
		}
	}

	useEffect(() => {
		document.documentElement.className = theme
	}, [theme])

	return (
		<div>
			<button onClick={toogleTheme}>Toogle</button>
		</div>
	)
}

export default Header
