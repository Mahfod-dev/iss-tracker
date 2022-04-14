import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'
import './Quiz.css'

const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useContextQuiz()
	return (
		<section className='quiz quiz-small'>
			<form className='setup-form'>
				<h2>setup quiz</h2>
				{/* amount */}
				<div className='form-control'>
					<label htmlFor='amount'>number of questions</label>
					<input
						type='number'
						name='amount'
						id='amount'
						value={quiz.amount}
						onChange={handleChange}
						className='form-input'
						min={1}
						max={50}
					/>
				</div>
				{/* category */}

				<div className='form-control'>
					<label htmlFor='category'>category</label>
					<select
						name='category'
						id='category'
						className='form-input'
						value={quiz.category}
						onChange={handleChange}>
						<option value='sciences'>sciences</option>
						<option value='mathematics'>mathematics</option>
						<option value='gadgets'>gadgets</option>
					</select>
				</div>
				{/* difficulty */}

				<div className='form-control'>
					<label htmlFor='difficulty'>select difficulty</label>
					<select
						name='difficulty'
						id='difficulty'
						className='form-input'
						value={quiz.difficulty}
						onChange={handleChange}>
						<option value='easy'>easy</option>
						<option value='medium'>medium</option>
						<option value='hard'>hard</option>
					</select>
				</div>
				{error && (
					<p className='error'>
						can't generate questions, please try different options
					</p>
				)}
				<button type='submit' onClick={handleSubmit} className='submit-btn'>
					start
				</button>
			</form>
		</section>
	)
}

export default SetupForm
