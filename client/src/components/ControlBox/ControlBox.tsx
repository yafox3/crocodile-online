import React from 'react'
import s from './ControlBox.module.scss'

interface ConrolBoxProps {
	children: React.ReactNode
	w?: string
}

const ControlBox: React.FC<ConrolBoxProps> = ({children, w}) => {
	return (
		<div className={s.box} style={{width: w || 400}}>
			{children}
		</div>
	)
}

export default ControlBox
