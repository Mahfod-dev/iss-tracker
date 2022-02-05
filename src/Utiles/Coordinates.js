import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ISS_URL = 'http://api.open-notify.org/iss-now.json'
const App = () => {
	const [coordinates, setCoordinates] = useState({ lat: '', lng: '' })

	const handleLocation = async () => {
		console.log('hello')
		// try {
		// 	const { data } = await axios.get(ISS_URL)
		// 	const { iss_position } = data
		// 	const { latitude, longitude } = iss_position

		// 	setCoordinates({ lat: latitude, lng: longitude })
		// } catch (error) {
		// 	console.log(error)
		// }
	}
	console.log(coordinates)
	useEffect(() => {
		const timeInterval = setInterval(handleLocation, 3000)

		return () => {
			clearInterval(timeInterval)
		}
	}, [handleLocation])

	return <div>hello</div>
}

export default App
