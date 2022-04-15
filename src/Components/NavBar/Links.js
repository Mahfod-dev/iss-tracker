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

import { firstName } from '../../Utiles/utilsFunc'

export default function Links() {
	const { currentUser } = useContext(UserContext)

	// console.log(
	// 	currentUser === null ? 'signIn' : firstName(currentUser.displayName)
	// )

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
		<ul className={style.containerLinks}>
			{navLink}

			<li>
				{currentUser === null ? (
					<Link
						to='/sign-in
						'>
						<h3>Sign in</h3>
					</Link>
				) : (
					<ul>
						<li>
							{currentUser === null
								? 'signIn'
								: firstName(
										currentUser.displayName ? currentUser.displayName : 'toi'
								  )}
						</li>
						<li>
							<Link to='/' onClick={signOutUser}>
								Sign out
							</Link>
						</li>
					</ul>
				)}
			</li>
			{/* <li>
					<Link to='/' onClick={signOutUser}>
						Sign out
					</Link>
				</li> */}
			{/* <li>
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
					) : (
						<ul>
							<li className={style["signed-name"]} >{`Bonjour ${firstName(currentUser.displayName)}`}</li>
							<li>
								<Link to='/' onClick={signOutUser}>
									Sign out
								</Link>
							</li>
						</ul>
					)}
				</li> */}
		</ul>
	)
}
