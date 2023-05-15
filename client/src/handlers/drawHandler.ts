import canvasState from '../store/canvasState'
import Brush from '../tools/Brush'
import { CANVAS_SIZE } from '../utils/consts'

export const drawHandler = (msg: any) => {
	const figure = msg.figure
	const ctx = canvasState.canvas?.getContext('2d')

	switch(figure.type) {
		case 'brush':
			Brush.draw(figure.x, figure.y, ctx, figure.color)
			break
		case 'clear':
			Brush.clear(ctx, CANVAS_SIZE.w, CANVAS_SIZE.h)
			break
		case 'finish':
			ctx?.beginPath()
			break
	}
} 