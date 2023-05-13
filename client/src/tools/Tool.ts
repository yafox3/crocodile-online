export default class Tool {
	canvas: HTMLCanvasElement
	ctx: CanvasRenderingContext2D | any

	constructor(canvas: HTMLCanvasElement) {
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