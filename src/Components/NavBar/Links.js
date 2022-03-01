import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
	return (
		<div className='container-links'>
			<ul>
				<li>
					<Link to='/'>Accueil</Link>
				</li>
				<li>
					<Link to='/apropos'>A propos</Link>
				</li>
				<li>
					<Link to='/auth'>Login</Link>
				</li>
				<li>
					{' '}
					<Link to='/quizz'>Testez-vous</Link>
				</li>
			</ul>
		</div>
	)
}
