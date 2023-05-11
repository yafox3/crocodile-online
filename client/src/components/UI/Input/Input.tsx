import React from 'react'
import s from './Input.module.scss'

interface InputProps {
	type?: string
	placeholder?: string
	w?: string
	h?: string
	value?: string
	setValue?: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<InputProps> = ({placeholder, w, h, value, type, setValue = () => {}}) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<input 
			type={type || 'text'}
			value={value}
			onChange={onChange}
			style={{width: w, height: h}}
			placeholder={placeholder}
			className={s.input}
		/>
	)	
}

export default Input