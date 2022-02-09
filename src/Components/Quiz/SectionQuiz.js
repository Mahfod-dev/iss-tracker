import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'

import './Quiz.css'

import SetupForm from '../Quiz/SetupForm'
import Loading from '../Quiz/Loading'
import Modal from '../Quiz/Modal'

const SectionQuiz = () => {
	const { waiting, loading, questions, index, correct } = useContextQuiz()

	if (waiting) {
		return <SetupForm />
	}
	if (loading) {
		return <Loading />
	}
	const { question, incorrect_answers, correct_answer } = questions[0]

	const answers = [...incorrect_answers, correct_answer]
	console.log(answers)
	return (
		<main>
			<Modal />
			<section className='quiz'>
				<p className='correct-answers'>
					Correct answers:{{ correct } / { index }}
				</p>
			</section>
		</main>
	)
}

export default SectionQuiz
