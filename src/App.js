import SectionQuiz from './Components/Quiz/SectionQuiz'
import React, { useState, useEffect } from 'react'
import {
	Header,
	Footer,
	NavBar,
	SectionQuizz,
	Main,
} from './Constants/exportModule'
import './Styles/globalStyle.css'
import { Routes, Route } from 'react-router-dom'
import Authpage from './pages/Authpage'

const App = () => {
	return (
		<>
			<NavBar />

			<Routes>
				<Route path='/' exact element={<Header />} />
				{/* <Route path="/apropos" element={<About />} /> */}
				<Route path='/auth' element={<Authpage />} />
				<Route path='/quizz' element={<SectionQuizz />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
