const express = require('express')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', () => {
	console.log('connection established')
})

server.listen(3001)
