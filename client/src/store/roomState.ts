import { makeAutoObservable } from 'mobx'
import { IMessage } from '../models/models'


class RoomState {
	messages: IMessage[] = []

	constructor () {
		makeAutoObservable(this)
	}

	setMessage(message: IMessage) {
		this.messages.push(message)
	}
}
// eslint-disable-next-line
export default new RoomState()