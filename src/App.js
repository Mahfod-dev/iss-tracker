import React, {useState, useEffect} from 'react'
import {Loader, Header, Footer } from './Constants/exportModule'


const App = () => {

	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false)
		}, 2500)
	}, [])

	return loader ? 
	(
		<Loader />
	) : (
		<>
			<Header />
			<Footer />
			<div>Coucou</div>
		</>
	)
}

export default App
