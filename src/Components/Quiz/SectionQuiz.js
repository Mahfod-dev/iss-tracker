import React from 'react'
import { useContextQuiz } from '../../context/contextQuiz'
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
	return <main>quiz app</main>
}

export default SectionQuiz
