export default class Tool {
	canvas: HTMLCanvasElement
	ctx: CanvasRenderingContext2D | any
	socket: WebSocket | null = null
	id: string

	constructor(canvas: HTMLCanvasElement, socket: WebSocket | null, id: string) {
		this.socket = socket
		this.id = id
		this.canvas = canvas
		this.ctx = canvas?.getContext('2d')
		this.destroyEvents()
	}

	set strokeColor (color: any) {
		this.ctx.strokeStyle = color
	}

	destroyEvents () {
		this.canvas.onmouseup = null
		this.canvas.onmousedown = null
		this.canvas.onmousemove = null
	}
}