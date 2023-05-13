import canvasState from '../store/canvasState'
import Brush from '../tools/Brush'

export const drawHandler = (msg: any) => {
	const figure = msg.figure
	const ctx = canvasState.canvas?.getContext('2d')

	switch(figure.type) {
		case 'brush':
			Brush.draw(figure.x, figure.y, ctx)
			break
		case 'finish':
			ctx?.beginPath()
			break
	}
} 