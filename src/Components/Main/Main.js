import React from 'react'
import { Outlet } from 'react-router-dom'
import Coordinates from '../../Utiles/Coordinates'

export default function Main() {
	return (
		<div>
			main
			<Coordinates />
		</div>
	)
}
