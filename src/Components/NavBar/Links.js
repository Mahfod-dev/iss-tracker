import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

export default function Links() {
	return (
		<div className={style.containerLinks}>
			<ul>
				<Link to='/'>
					<h3>Accueil</h3>
				</Link>
				<Link to='/apropos'>
					<h3>A propos</h3>
				</Link>
				<Link to='/auth'>
					<h3>Login</h3>
				</Link>
				<Link to='/quizz'>
					<h3>Testez-vous</h3>
				</Link>
			</ul>
		</div>
	)
}
