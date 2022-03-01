import React, { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'

const AppContext = React.createContext()
const ISS_URL = 'http://api.open-notify.org/iss-now.json'

const CoordinatesProvider = ({ children }) => {
	const [coordinates, setCoordinates] = useState({ lat: '', lng: '' })

	const handleLocation = useCallback(async () => {
		console.log('hello')
		try {
			const { data } = await axios.get(ISS_URL)
			const { iss_position } = data
			const { latitude, longitude } = iss_position

			setCoordinates({ lat: latitude, lng: longitude })
		} catch (error) {
			console.log(error)
		}
	}, [])
	useEffect(() => {
		const timeInterval = setInterval(handleLocation, 3000)

		return () => {
			clearInterval(timeInterval)
		}
	}, [handleLocation])

	return (
		<AppContext.Provider value={coordinates}>{children}</AppContext.Provider>
	)
}

export const ContextCoordinates = () => {
	return useContext(AppContext)
}
export { AppContext, CoordinatesProvider }
