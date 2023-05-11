import React from 'react'
import s from './ControlBox.module.scss'

const ControlBox: React.FC<React.PropsWithChildren> = ({children}) => {
	return (
		<div className={s.box}>
			{children}
		</div>
	)
}

export default ControlBox
