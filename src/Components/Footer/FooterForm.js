import React from 'react'
import "./Footer.css"

const FooterForm = () => {
	return (
		<>
			<form className='footer-form' action='https://formspree.io/f/mdobgydk' method='POST'>
				<input type='email' placeholder='Enter Email' name='_replyto' />
				<button type='submit'>subscribe</button>
			</form>
		</>
	)
}

export default FooterForm
