import React from 'react'
import loader from './Loader.css'

export default function Loader() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				height: '100vh',
			}}>
			<img src={loader} alt='loader' />
		</div>
	)
}
