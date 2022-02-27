import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
//
import { Footer, NavBar, Main } from './Constants/exportModule'
//
import './Styles/globalStyle.css'

const Header = lazy(() => import('./Components/Header/Header'))
const Authenfication = lazy(() => import('./Pages/Authenfication'))
const Quiz = lazy(() => import('./Pages/Quiz'))
const About = lazy(() => import('./Pages/About'))
console.log(Header, About)

const App = () => {
	return (
		<>
			<NavBar />

			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={<div>Loading....</div>}>
							<Header />
						</Suspense>
					}
				/>
				<Route
					path='/apropos'
					element={
						<Suspense fallback={<div>Loading....</div>}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path='auth'
					element={
						<Suspense fallback={<div>Loading....</div>}>
							<Authenfication />
						</Suspense>
					}
				/>

				<Route
					path='quizz'
					element={
						<Suspense fallback={<div>Loading....</div>}>
							<Quiz />
						</Suspense>
					}
				/>
			</Routes>

			<Footer />
		</>
	)
}

export default App
