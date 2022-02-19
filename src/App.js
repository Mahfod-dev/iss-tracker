import React, {useState, useEffect} from 'react'
import { Header, Footer, NavBar, SectionQuizz, Main } from './Constants/exportModule'
import "./Styles/globalStyle.css"
import {Routes,Route} from "react-router-dom"



const App = () => {

	return (
		<>
			<NavBar />
			<Header/>
			<Routes>
				<Route path="/" exact element={<Main />} />
				{/* <Route path="/apropos" element={<About />} /> */}
				<Route path="/quizz" element={<SectionQuizz />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
