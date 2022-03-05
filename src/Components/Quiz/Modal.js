import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'
import classes from './Quiz.module.css'

const Modal = () => {
	const { isModalOpen, closeModal, correct, questions } = useContextQuiz()
	return (
		<div
			className={`${
				isModalOpen ? classes['modal-container isOpen'] : 'modal-container'
			}`}>
			<div className={classes['modal-content']}>
				<h2>congrats!</h2>
				<p>
					You answered {((correct / questions.length) * 100).toFixed(0)}% of
					questions correctly
				</p>
				<button className={classes['close-btn']} onClick={closeModal}>
					play again
				</button>
			</div>
		</div>
	)
}

export default Modal
