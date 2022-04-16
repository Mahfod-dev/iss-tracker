import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'
import DOMPurify from 'dompurify'
import './quiz.css'
import SetupForm from './SetupForm'
import Loader from '../../UI/Loader/Loader'
import Modal from './Modal'
function SectionQuiz() {
	const {
		waiting,
		loading,
		questions,
		index,
		correct,
		nextQuestion,
		checkAnswer,
	} = useContextQuiz()
	if (waiting) {
		return <SetupForm />
	}
	if (loading) {
		return <Loader />
	}

	const { question, incorrect_answers, correct_answer } = questions[index]
	let answers = [...incorrect_answers]
	const clean = DOMPurify.sanitize(question)

	// const answers = [...incorrect_answers, correct_answer]

	const tempIndex = Math.floor(Math.random() * 4)
	if (tempIndex === 3) {
		answers.push(correct_answer)
	} else {
		answers.push(answers[tempIndex])
		answers[tempIndex] = correct_answer
	}

	return (
		<main>
			<Modal />
			<section className='quiz'>
				<p className='correct-answers'>
					correct answers : {correct}/{index}
				</p>
				<article className='container'>
					<h2 className='title-quiz'>{clean}</h2>
					<div className='btn-container'>
						{answers.map((answer, index) => {
							const answerB = DOMPurify.sanitize(answer)
							return (
								<button
									key={index}
									className='answer-btn'
									onClick={() => checkAnswer(correct_answer === answerB)}>
									{answerB}
								</button>
							)
						})}
					</div>
				</article>
				<button className='next-question' onClick={nextQuestion}>
					next question
				</button>
			</section>
		</main>
	)
}

export default SectionQuiz
