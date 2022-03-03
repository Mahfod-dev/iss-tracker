import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../Utiles/Firebase/FirebaseAuth'
import classes from './AuthForm.module.css'

const defaultFormFields = {
	email: '',
	password: '',
}

const Signin = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const submitHandler = async (event) => {
		event.preventDefault()

		try {
			await signInAuthUserWithEmailAndPassword(email, password)
			console.log('add modal')
			resetFormFields()
		} catch (error) {
			console.log('user sign in failed', error)
		}
	}
	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields({ ...formFields, [name]: value })
	}

	// optional: Add validation

	// fetch(
	// 	'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDENFNKUI3EvxOj9Kh8etaC0M5wLUpwHmg',
	// 	{
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			email: enteredEmail,
	// 			password: enteredPassword,
	// 			returnSecureToken: true,
	// 		}),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	}
	// ).then((res) => {
	// 	if (res.ok) {
	// 		// ... ADD
	// 	} else {
	// 		return res.json().then((data) => {
	// 			// show an error modal
	// 			console.log(data)
	// 		})
	// 	}
	// })

	return (
		<section className={classes['login-box']}>
			<h2 className={classes.title}>Sign in</h2>
			<form onSubmit={submitHandler}>
				<div className={classes['user-box']}>
					<div className={classes['user-box']}>
						<input
							type='email'
							id='email'
							required
							onChange={handleChange}
							name='email'
							value={email}
						/>
						<label htmlFor='email'>Your Email</label>
					</div>
				</div>
				<div className={classes['user-box']}>
					<input
						type='password'
						id='password'
						required
						onChange={handleChange}
						name='password'
						value={password}
					/>
					<label htmlFor='password'>Your Password</label>
				</div>
				<div>
					<button>Login</button>
					<button onClick={signInWithGooglePopup}>Google</button>
					<button>
						<Link to='/sign-up'>Sign Up Instead</Link>
					</button>
				</div>
			</form>
		</section>
	)
}

export default Signin
