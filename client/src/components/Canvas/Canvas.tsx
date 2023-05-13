import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'
import canvasState from '../../store/canvasState'
import toolState from '../../store/toolState'
import Brush from '../../tools/Brush'
import s from './Canvas.module.scss'

const Canvas: React.FC = observer(() => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		toolState.setTool(new Brush(canvasState.canvas))
	}, [])

	const changeColor = (event: any) => {
		toolState.setStrokeColor(event.target.value)
	}

	return (
		<div className={s.canvas}>
			<h2 className={s.canvas__title}>Загаданное слово: Помидор</h2>
			<input onChange={(event: any) => changeColor(event)} type="color" className={s.canvas__color}/>
			<canvas width='700px' height='600px' ref={canvasRef}/>
		</div>
	)
})

export default Canvas
