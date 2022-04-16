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

			resetFormFields()
			navigate('/')
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
							className={classes['input-form']}
							type='name'
							id='displayName'
							required
							onChange={handleChange}
							name='displayName'
							value={displayName}
						/>
						<label className={classes.labelForm} htmlFor='email'>
							Your Name
						</label>
					</div>
				</div>
				<div className={classes['user-box']}>
					<div className={classes['user-box']}>
						<input
							className={classes['input-form']}
							type='email'
							id='email'
							required
							onChange={handleChange}
							name='email'
							value={email}
						/>
						<label className={classes.labelForm} htmlFor='email'>
							Your Email
						</label>
					</div>
				</div>
				<div className={classes['user-box']}>
					<input
						className={classes['input-form']}
						type='password'
						id='password'
						required
						onChange={handleChange}
						name='password'
						value={password}
					/>
					<label className={classes.labelForm} htmlFor='password'>
						Your Password
					</label>
				</div>
				<div className={classes['user-box']}>
					<input
						className={classes['input-form']}
						type='password'
						id='confirmPassword'
						required
						onChange={handleChange}
						name='confirmPassword'
						value={confirmPassword}
					/>
					<label className={classes.labelForm} htmlFor='password'>
						Confirm Your Password
					</label>
				</div>
				<div>
					<button className={classes['button-form']} type='submit'>
						Login
					</button>

					<button className={classes['button-form']}>
						<Link to='/sign-in'>Sign In</Link>
					</button>
				</div>
			</form>
		</section>
	)
}

export default Signup
