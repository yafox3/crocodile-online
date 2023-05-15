import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'
import canvasState from '../../store/canvasState'
import roomState from '../../store/roomState'
import toolState from '../../store/toolState'
import Brush from '../../tools/Brush'
import s from './Canvas.module.scss'
import { CANVAS_SIZE } from '../../utils/consts'
import userState from '../../store/userState'

const Canvas: React.FC = observer(() => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		toolState.setTool(new Brush(canvasState.canvas, roomState.socket, roomState.roomId))
	}, [])

	const changeColor = (event: any) => {
		toolState.setStrokeColor(event.target.value)
	}

	const isDrawer = () => {
		if (userState.user === roomState.drawer) {
			return (
				<>
					<h2 className={s.canvas__title}>Загаданное слово: {roomState.currentWord}</h2>
					<input onChange={(event: any) => changeColor(event)} type="color" className={s.canvas__color}/>
				</>
			)
		}
		return <h2 className={s.canvas__title}>Сейчас рисует: {roomState.drawer}</h2>
	}

	return (
		<div className={s.canvas}>
			{ isDrawer() }
			<canvas width={CANVAS_SIZE.w} height={CANVAS_SIZE.h} ref={canvasRef}/>
		</div>
	)
})

export default Canvas
