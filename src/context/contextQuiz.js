import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
	science: 17,
	mathematics: 19,
	gadgets: 30,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const tempUrl =
	'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true)
	const [loading, setLoading] = useState(false)
	const [questions, setQuestions] = useState([])
	const [index, setIndex] = useState(0)
	const [correct, setCorrect] = useState(0)
	const [quiz, setQuiz] = useState({
		amount: 10,
		category: 10,
		difficulty: 'medium',
	})
	const [error, setError] = useState(false)

	const [isModalOpen, setIsModalOpen] = useState(false)

	const fetchQuestions = async (url) => {
		setLoading(true)
		setWaiting(false)

		const response = await axios.get(url).catch((err) => console.log(err))

		if (response) {
			const {
				data: { results },
			} = response
			if (results.length > 0) {
				setQuestions(results)
				setLoading(false)
				setWaiting(false)
				setError(false)
			} else {
				setWaiting(true)
				setError(true)
			}
		} else {
			setWaiting(true)
		}
	}

	const nextQuestion = () => {
		setIndex((oldIndex) => {
			const index = oldIndex + 1
			if (index > questions.length - 1) {
				openModal()
				return 0
			} else {
				return index
			}
		})
	}
	const checkAnswer = (value) => {
		if (value) {
			setCorrect((oldState) => oldState + 1)
		}
		nextQuestion()
	}

	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setWaiting(true)
		setCorrect(0)
		setIsModalOpen(false)
	}

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setQuiz({ ...quiz, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const { amount, category, difficulty } = quiz

		const tempUrl =
			'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple'
		console.log(amount, category, difficulty)
		const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
		console.log(url)
		fetchQuestions(url)
	}

	// useEffect(() => {
	// 	fetchQuestions(tempUrl)
	// }, [])

	return (
		<AppContext.Provider
			value={{
				waiting,
				loading,
				questions,
				index,
				correct,
				error,
				isModalOpen,
				nextQuestion,
				checkAnswer,
				closeModal,
				quiz,
				handleChange,
				handleSubmit,
			}}>
			{children}
		</AppContext.Provider>
	)
}

export const useContextQuiz = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
