import React, { useState, useEffect, useCallback } from 'react'
import WorldMap from './WorldMap'
import Coordinates from '../../Utiles/Coordinates'
import style from "./Main.module.css"
import axios from 'axios'

const ISS_URL = 'http://api.open-notify.org/iss-now.json'

export default function Main() {

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


	return (
		<div className={style["container-map"]}>
			<WorldMap coordinates={coordinates}/>
			<Coordinates coordinates={coordinates}/>
		</div>
	)
}
