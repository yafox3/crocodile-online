import React from 'react'
import s from './Canvas.module.scss'

const Canvas: React.FC = () => {
	return (
		<div className={s.canvas}>
			<h2 className={s.canvas__title}>Загаданное слово: Помидор</h2>
			<canvas width='700px' height='600px' />
		</div>
	)
}

export default Canvas
