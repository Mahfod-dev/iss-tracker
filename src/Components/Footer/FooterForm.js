import React from 'react'
import SocialNetworks from './SocialNetworks'

import style from './Footer.module.css';

const FooterForm = () => {
	return (
		<div className={style.social}>
			<span>Inscrivez-vous à notre newsletter :</span>
			<form action='https://formspree.io/f/mdobgydk' method='POST'>
				<input id={style.newsletterSubscription} type='email' placeholder='adresse mail' name='_replyto' />
				<button type='submit'>Je m'inscris</button>
			</form>
			<SocialNetworks/>
		</div>
	)
}

export default FooterForm
