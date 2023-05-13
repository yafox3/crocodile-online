import { makeAutoObservable } from 'mobx'

export class CanvasState {
	canvas: HTMLCanvasElement | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setCanvas (canvas: HTMLCanvasElement | null) {
		this.canvas = canvas
	}
}
// eslint-disable-next-line
export default new CanvasState()