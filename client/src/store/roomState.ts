import { makeAutoObservable } from 'mobx'
import { IMessage } from '../models/models'

class RoomState {
	roomId: string = ''
	socket: WebSocket | null = null
	messages: IMessage[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setSocket(socket: WebSocket) {
		this.socket = socket
	}

	setMessage(message: IMessage) {
		this.messages.push(message)
	}

	createRoom() {
		this.roomId = Date.now().toString().replace(' ', '')
	}

	connectToRoom(id: string) {
		this.roomId = id
	}
}
// eslint-disable-next-line
export default new RoomState()