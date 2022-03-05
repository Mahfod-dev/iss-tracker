import React from 'react'
import Introduction from './Introduction.js'
import Articles from '../Articles/Articles.js'
import Hr from '../../UI/Hr/Hr.js'

import style from './Header.module.css'

const Header = () => {
	return (
		<>
			<div className={style.header}>
				<Introduction />
				<Hr />
				<Articles />
			</div>
		</>
	)
}

export default Header
