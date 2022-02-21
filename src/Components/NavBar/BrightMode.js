import React, { useState, useEffect } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'

const getStorageTheme = () => {
	let theme = 'light-theme'
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme
}

const BrightMode = () => {
	const [theme, setTheme] = useState(getStorageTheme())
	const [isDarkMode, setIsDarkMode] = useState(() => false)

	const toggleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme')
		} else {
			setTheme('light-theme')
		}
	}

	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])
	return (
		<div onClick={toggleTheme} className='nav-center'>
			{/* <button type='checkbox' className='btn' onClick={toggleTheme}>
				</button> */}
			<DarkModeToggle
				checked={isDarkMode}
				onChange={setIsDarkMode}
				className='btn'
				size={50}
			/>
		</div>
	)
}

export default BrightMode
