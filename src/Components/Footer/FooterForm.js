import React from 'react'
import SocialNetworks from './SocialNetworks'

import style from './Footer.module.css';

const FooterForm = () => {
	return (
		<div className={style.social}>
			<span>Subscribe to our newsletter :</span>
			<form action='https://formspree.io/f/mdobgydk' method='POST'>
				<input id={style.newsletterSubscription} type='email' placeholder='e-mail address' name='_replyto' />
				<button type='submit'>I'm registering</button>
			</form>
			<SocialNetworks/>
		</div>
	)
}

export default FooterForm
