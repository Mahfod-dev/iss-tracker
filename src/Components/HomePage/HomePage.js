import React from 'react'
import style from './HomePage.module.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
	return (
		<div className={style['container-map']}>
			<p> Merci de vous connecter pour acceder à la carte</p>
			<Link to='/sign-up'>
				<button className={style.btn}>Login</button>
			</Link>
		</div>
	)
}
