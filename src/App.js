import React, { lazy, Suspense, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserContext } from './context/UserContext'
import { Footer, NavBar, Loader, HomePage } from './Constants/exportModule'
import ArticleItem from './Components/Articles/ArticleItem'

//
import './Styles/globalStyle.css'


const Header = lazy(() => import('./Components/Header/Header'))
const Signup = lazy(() => import('./Components/Authenfication/Signup'))
const Signin = lazy(() => import('./Components/Authenfication/Signin'))
const Quiz = lazy(() => import('./Pages/Quiz'))
const About = lazy(() => import('./Pages/About'))
const Main = lazy(() => import('./Components/Main/Main'))

const App = () => {
	const { currentUser } = useContext(UserContext)



	return (
		<main className='rootStyle'>
			<Routes>
				<Route path='/' element={<NavBar />}>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<Header />
								{currentUser ? <Main /> : <HomePage />}
							</Suspense>
						}
					/>

					<Route
						path='/about'
						element={
							<Suspense fallback={<Loader />}>
								<About />
							</Suspense>
						}
					/>

					<Route
						path='quiz'
						element={
							<Suspense fallback={<Loader />}>
								<Quiz />
							</Suspense>
						}
					/>
					<Route
						path='sign-in'
						element={
							<Suspense fallback={<Loader />}>
								<Signin />
							</Suspense>
						}
					/>
					<Route
						path='sign-up'
						element={
							<Suspense fallback={<Loader />}>
								<Signup />
							</Suspense>
						}
					/>

					<Route path='article/:id' element={<ArticleItem />} />
				</Route>
			</Routes>

			<Footer />
		</main>
	)
}

export default App
