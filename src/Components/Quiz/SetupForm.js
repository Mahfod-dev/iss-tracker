import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'
import classes from './Quiz.module.css'

const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useContextQuiz()
	return (
		<main>
			<section className={classes['quiz quiz-small']}>
				<form className={classes['setup-form']}>
					<h2>Setup quiz</h2>
					<div className={classes['form-control']}>
						<label htmlFor='amount'>number of questions</label>
						<input
							type='number'
							name='amount'
							id='amount'
							value={quiz.amount}
							onChange={handleChange}
							className={classes['form-input']}
							min={1}
							max={50}
						/>
					</div>
					{/* category */}

					<div className={classes['form-control']}>
						<label htmlFor='category'>category</label>
						<select
							name='category'
							id='category'
							className={classes['form-input']}
							value={quiz.category}
							onChange={handleChange}>
							<option value='science'>science</option>
							<option value='mathematics'>mathematics</option>
							<option value='gadgets'>sciences : gadgets</option>
						</select>
					</div>
					{/* difficulty */}

					<div className={classes['form-control']}>
						<label htmlFor='difficulty'>select difficulty</label>
						<select
							name='difficulty'
							id='difficulty'
							className={classes['form-input']}
							value={quiz.difficulty}
							onChange={handleChange}>
							<option value='easy'>easy</option>
							<option value='medium'>medium</option>
							<option value='hard'>hard</option>
						</select>
					</div>
					{error && (
						<p>Can't generate questions,please try different options</p>
					)}
					<button
						className={classes['submit-btn']}
						type='submit'
						onClick={handleSubmit}>
						Start
					</button>
				</form>
			</section>
		</main>
	)
}

export default SetupForm
