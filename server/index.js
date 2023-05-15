const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const aWss = WSServer.getWss()
const PORT = process.env.PORT || 5000

app.use(express.json())

const users = []

app.ws('/', (ws, req) => {
	ws.on('message', msg => {
		msg = JSON.parse(msg)
		switch (msg.method) {
			case 'connection':
				connectionHandler(ws, msg)
				break
			case 'draw':
				broadcastConnection(ws, msg)
				break
			case 'sendMessage':
				broadcastConnection(ws, msg)
				break
			case 'startGame': 
				broadcastConnection(ws, msg)
				break
			case 'clear':
				broadcastConnection(ws, msg)
				break
		}
	})
})

app.listen(PORT, () => console.log('working...'))

const connectionHandler = (ws, msg) => {
	ws.id = msg.id
	users.push({
		username: msg.user.username,
		isOwner: msg.user.isOwner,
		isDraw: msg.user.isDraw
	})
	broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
	aWss.clients.forEach(client => {
		if (client.id === msg.id) {
			client.send(JSON.stringify(msg))
		}
	})
}
