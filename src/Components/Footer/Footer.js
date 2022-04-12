import React from 'react'
import FooterForm from './FooterForm'
import LegalNotice from './LegalNotice'
import style from "./Footer.module.css"


const Footer = () => {
	return (
		<footer className={style.footer}>
			<LegalNotice />
			<FooterForm />
		</footer>
	)
}

export default Footer
