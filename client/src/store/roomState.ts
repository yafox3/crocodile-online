import { makeAutoObservable } from 'mobx'
import { words } from '../data/words'
import { IMessage } from '../models/models'
import canvasState from './canvasState'
import userState from './userState'

class RoomState {
	roomId: string = ''
	owner: string = ''
	drawer: string = ''
	socket: WebSocket | null = null
	messages: IMessage[] = []
	currentWord: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	setSocket(socket: WebSocket) {
		this.socket = socket
	}

	sendMessage(message: IMessage) {
		this.socket?.send(JSON.stringify({
			...message,
			method: 'sendMessage'
		}))
		
		if (message.text.toLowerCase() === this.currentWord.toLowerCase()) {
			this.restartGame(message.author)
		}
	}

	setMessage(message: IMessage) {
		this.messages.push(message)
	}
	
	createRoom() {
		this.owner = userState.user
		this.roomId = Date.now().toString().replace(' ', '')
	}

	connectToRoom(id: string) {
		this.roomId = id
	}

	setWord(word?: string) {
		this.currentWord = word || words[Math.floor(Math.random() * words.length)]
	}

	setDrawer(user: string) {
		this.drawer = user
	}

	startGame() {
		canvasState.clearCanvas()
		this.setWord()
		this.setDrawer(this.owner)

		this.socket?.send(JSON.stringify({
			method: 'startGame',
			id: this.roomId,
			word: this.currentWord,
			drawer: this.drawer,
		}))
	}
	
	restartGame(winner: string) {
		canvasState.clearCanvas()
		this.setWord()
		this.setDrawer(winner)

		this.socket?.send(JSON.stringify({
			method: 'startGame',
			id: this.roomId,
			word: this.currentWord,
			drawer: this.drawer,
		}))
	}
}
// eslint-disable-next-line
export default new RoomState()