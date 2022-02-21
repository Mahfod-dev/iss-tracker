import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'

import './Quiz.css'

import SetupForm from '../Quiz/SetupForm'
import Loading from '../Quiz/Loading'
import Modal from '../Quiz/Modal'

const SectionQuiz = () => {
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
		return <Loading />
	}
	const { question, incorrect_answers, correct_answer } = questions[index]
	console.log(index, correct)
	// const answers = [...incorrect_answers, correct_answer]
	let answers = [...incorrect_answers]
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
					Correct answers:{correct} / {index}
				</p>
				<article className='container'>
					<h2 dangerouslySetInnerHTML={{ __html: question }} />

					<div className='btn-container'>
						{answers.map((answer, index) => {
							return (
								<button
									key={index}
									onClick={() => checkAnswer(correct_answer === answer)}
									className='answer-btn'
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
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
