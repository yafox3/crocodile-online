import roomState from '../store/roomState'
import userState from '../store/userState'
import Tool from './Tool'

export default class Brush extends Tool {
	mouseDown: boolean = false

	constructor(canvas: any, socket: WebSocket | null, id: string) {
		super(canvas, socket, id)
		this.listen()
	}

	listen() {
		this.canvas.onmouseup = this.mouseUpHandler.bind(this)
		this.canvas.onmousedown = this.mouseDownHandler.bind(this)
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
	}

	mouseUpHandler(event: MouseEvent) {
		this.mouseDown = false
		this.socket?.send(JSON.stringify({
			method: 'draw', 
			id: this.id,
			figure: {
				type: 'finish',
			}
		}))
	}

	mouseDownHandler(event: MouseEvent) {
		this.mouseDown = true
		this.ctx?.beginPath()
		this.ctx?.moveTo(event.offsetX, event.offsetY)
	}

	mouseMoveHandler(event: MouseEvent) {
		if (this.mouseDown && userState.user === roomState.drawer) {
			this.socket?.send(JSON.stringify({
				method: 'draw', 
				id: this.id,
				figure: {
					type: 'brush',
					x: event.offsetX,
					y: event.offsetY,
					color: this.ctx.strokeStyle
				}
			}))
		}
	}

	static draw (x: number, y: number, ctx: any, color: any) {
		ctx.lineTo(x, y) 
		ctx.strokeStyle = color
		ctx.stroke()
	}

	static clear (ctx: any, w: number, h: number) {
		ctx.clearRect(0, 0, w, h)
	}
}