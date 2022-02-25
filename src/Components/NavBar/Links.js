import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
	return (
		<div className='container-links'>
			<ul>
				<Link to='/'>Accueil</Link>
				<Link to='/apropos'>A propos</Link>
				<Link to='/auth'>Login</Link>
				<Link to='/quizz'>Testez-vous</Link>
			</ul>
		</div>
	)
}
