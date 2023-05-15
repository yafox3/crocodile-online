import { makeAutoObservable } from 'mobx'
import roomState from './roomState'

export class CanvasState {
	canvas: HTMLCanvasElement | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setCanvas (canvas: HTMLCanvasElement | null) {
		this.canvas = canvas
	}

	clearCanvar() {
		roomState.socket?.send(JSON.stringify({
			method: 'clear', 
			id: roomState.roomId,
			figure: {
				type: 'clear',
			}
		}))
	}
}
// eslint-disable-next-line
export default new CanvasState()