import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'
import style from "./Quiz.module.css"


const Modal = () => {
	const { isModalOpen, closeModal, correct, questions } = useContextQuiz()
	return ( 
		<div
			className={`${
				isModalOpen ? style['modal-container isOpen'] : style['modal-container']
			}`}>
			<div className={style['modal-content']}>
				<h2>Congrats !</h2>
				<p>
					You answered {((correct / questions.length) * 100).toFixed(0)}% of
					questions correctly
				</p>
				<button className={style['close-btn']} onClick={closeModal}>
					play again
				</button>
			</div>
		</div>
	)
}

export default Modal
