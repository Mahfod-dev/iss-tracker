import { useState, useRef } from 'react'
import {
	createAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../Utiles/Firebase/FirebaseAuth'
import classes from './AuthForm.module.css'

const defaultFormFields = {
	email: '',
	password: '',
}

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState)
	}

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const submitHandler = async (event) => {
		event.preventDefault()

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password)

			resetFormFields()
		} catch (error) {
			console.log(error.message)
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
		<section className={classes.auth}>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
					<label htmlFor='email'>Your Email</label>
					<input
						type='email'
						id='email'
						required
						onChange={handleChange}
						name='email'
						value={email}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						type='password'
						id='password'
						required
						onChange={handleChange}
						name='password'
						value={password}
					/>
				</div>
				<div className={classes.actions}>
					<button>{isLogin ? 'Login' : 'Create Account'}</button>
					{isLogin && <button onClick={signInWithGooglePopup}>Google</button>}
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	)
}

export default AuthForm
