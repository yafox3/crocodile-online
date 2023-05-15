import React from 'react'
import s from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	variant: string
	w?: string
	h?: string
	onClick?: () => void
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({variant, children, w, h, disabled, onClick}) => {
	return (
		<button 
			className={variant === 'primary' ? s.btn : `${s.btn} ${s.btn_secondary}`}
			style={{width: w, height: h}}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
