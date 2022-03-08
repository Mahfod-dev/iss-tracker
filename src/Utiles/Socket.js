import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

// const ISS_URL = 'http://api.open-notify.org/iss-now.json'

// const socket = io.connect('http://localhost:3001')

const Socket = () => {
	const [socket, setSocket] = useState(null)

	// useEffect(() => {
	// 	const newSocket = io(ISS_URL)
	// 	console.log(newSocket)
	// }, [])

	return <div>Socket</div>
}

export default Socket
