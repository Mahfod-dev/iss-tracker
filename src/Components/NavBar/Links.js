import React, { useContext } from 'react'
//ROUTER
import { Link } from 'react-router-dom'
//FIREBASE
import { signOutUser } from '../../Utiles/Firebase/FirebaseAuth'
//CONTEXT
import { UserContext } from '../../context/UserContext'
//CSS
import style from './NavBar.module.css'
import { links } from './data.js'

export default function Links() {
	
	const { currentUser } = useContext(UserContext)

	const navLink = links.map((link) => {
		return (
			<li key={link.id}>
				<Link to={link.url}>
					<h3>{link.text}</h3>
				</Link>
			</li>
		)
	})

	return (
		<div className={style.containerLinks}>
			<ul>
				{navLink}
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
