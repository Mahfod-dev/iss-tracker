import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
//
import { Footer, NavBar, Loader } from './Constants/exportModule'

//
import './Styles/globalStyle.css'

const Header = lazy(() => import('./Components/Header/Header'))
const Authenfication = lazy(() => import('./Pages/Authenfication'))
const Quiz = lazy(() => import('./Pages/Quiz'))
const About = lazy(() => import('./Pages/About'))
const Main = lazy(() => import('./Components/Main/Main'))
console.log(Header, About, Main)

const App = () => {
	return (
		<>
			<NavBar />

			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={<Loader />}>
							<Header />
							<Main />
						</Suspense>
					}
				/>

				<Route
					path='/apropos'
					element={
						<Suspense fallback={<Loader />}>
							<About />
						</Suspense>
					}
				/>

				<Route
					path='quizz'
					element={
						<Suspense fallback={<Loader />}>
							<Quiz />
						</Suspense>
					}
				/>
				<Route
					path='auth'
					element={
						<Suspense fallback={<Loader />}>
							<Authenfication />
						</Suspense>
					}
				/>
			</Routes>

			<Footer />
		</>
	)
}

export default App
