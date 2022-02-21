import React from 'react'

const FooterForm = () => {
	return (
		<>
			<form action='https://formspree.io/f/mdobgydk' method='POST'>
				<input type='email' placeholder='Enter Email' name='_replyto' />
				<button type='submit'>subscribe</button>
			</form>
		</>
	)
}

export default FooterForm
