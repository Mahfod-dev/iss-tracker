import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const ISS_URL = 'http://api.open-notify.org/iss-now.json'

const Coordinates = () => {
	const [coordinates, setCoordinates] = useState({ lat: '', lng: '' })

	const handleLocation = useCallback(async () => {
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

	return <div>Coordinates : {`${coordinates.lat} ${coordinates.lng}`}</div>
}

export default React.memo(Coordinates)
