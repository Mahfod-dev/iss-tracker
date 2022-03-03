import React, { useContext } from 'react'
//ROUTER
import { Link } from 'react-router-dom'
//FIREBASE
import { signOutUser } from '../../Utiles/Firebase/FirebaseAuth'
//CONTEXT
import { UserContext } from '../../context/UserContext'
//CSS
import style from './NavBar.module.css'

export default function Links() {
	const { currentUser } = useContext(UserContext)

	return (
		<div className={style.containerLinks}>
			<ul>
				<li>
					<Link to='/'>
						<h3>Accueil</h3>
					</Link>
				</li>
				<li>
					<Link to='/apropos'>
						<h3>A propos</h3>
					</Link>
				</li>
				<li>
					<Link to='/quizz'>
						<h3>Testez-vous</h3>
					</Link>
				</li>
				<li>
					{currentUser ? (
						<Link to='/' onClick={signOutUser}>
							Sign out
						</Link>
					) : (
						<Link
							to='/sign-in
						'>
							<h3>Sign in</h3>
						</Link>
					)}
				</li>
			</ul>
		</div>
	)
}
