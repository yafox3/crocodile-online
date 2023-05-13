import Tool from './Tool'

export default class Brush extends Tool {
	mouseDown: boolean = false

	constructor(canvas: any) {
		super(canvas)
		this.listen()
	}

	listen() {
		this.canvas.onmouseup = this.mouseUpHandler.bind(this)
		this.canvas.onmousedown = this.mouseDownHandler.bind(this)
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
	}

	mouseUpHandler(event: MouseEvent) {
		this.mouseDown = false
	}

	mouseDownHandler(event: MouseEvent) {
		this.mouseDown = true
		this.ctx?.beginPath()
		this.ctx?.moveTo(event.offsetX, event.offsetY)
	}

	mouseMoveHandler(event: MouseEvent) {
		if (this.mouseDown) {
			this.draw(event.offsetX, event.offsetY)
		}
	}

	draw (x: number, y: number) {
		this.ctx?.lineTo(x, y) 
		this.ctx?.stroke()
	}
}