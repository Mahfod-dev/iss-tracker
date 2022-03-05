import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../Utiles/Firebase/FirebaseAuth.js'
import classes from './AuthForm.module.css'
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

const Signup = () => {
	const navigate = useNavigate()
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { displayName, email, password, confirmPassword } = formFields

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('passwords do not match')
			return
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password)

			await createUserDocumentFromAuth(user, { displayName })
			console.log('add Modal')
			navigate('/')
			resetFormFields()
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use')
			} else {
				console.log('user creation encountered an error', error)
			}
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields({ ...formFields, [name]: value })
	}

	return (
		<section className={classes['login-box']}>
			<h2 className={classes.title}>Sign up</h2>
			<form onSubmit={handleSubmit}>
				<div className={classes['user-box']}>
					<div className={classes['user-box']}>
						<input
							label='Display Name'
							type='text'
							required
							onChange={handleChange}
							name='displayName'
							value={displayName}
						/>
						<label htmlFor='displayName'>Your Name</label>
					</div>
				</div>
				<div className={classes['user-box']}>
					<input
						label='Email'
						type='email'
						required
						onChange={handleChange}
						name='email'
						value={email}
					/>
					<label htmlFor='email'>Your Email</label>
				</div>
				<div className={classes['user-box']}>
					<input
						label='Password'
						type='password'
						required
						onChange={handleChange}
						name='password'
						value={password}
					/>
					<label htmlFor='email'>Your Password</label>
				</div>
				<div className={classes['user-box']}>
					<input
						label='Confirm Password'
						type='password'
						required
						onChange={handleChange}
						name='confirmPassword'
						value={confirmPassword}
					/>
					<label htmlFor='confirmPassword'>Confirm Password</label>
				</div>
				<div>
					<button type='submit'>Login</button>
				</div>
				<button>
					<Link to='/sign-in'>Sign Up Instead</Link>
				</button>
			</form>
		</section>
	)
}

export default Signup
