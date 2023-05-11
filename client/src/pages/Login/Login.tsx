import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ControlBox from '../../components/ControlBox/ControlBox'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import users from '../../store/Users'
import { WELCOME_ROUTE } from '../../utils/consts'
import s from './Login.module.scss'

const Login: React.FC = observer(() => {
	const [username, setUsername] = useState('');
	const navigate = useNavigate()

	const onClick = () => {
		if (username) {
			users.login(username)
			navigate(WELCOME_ROUTE)
		}
	}

	return (
		<>
			<Logo />
			<ControlBox>
				<h2 className='title'>Как к вам обращаться?</h2>
				<div className={s.form}>
					<Input
						placeholder='Ваше имя'
						w='100%'
						h='50px'
						value={username}
						setValue={setUsername}
					/>
					<Button
						variant='primary' 
						w='170px'
						h='40px'
						onClick={onClick}
					>
						Вход
					</Button>
				</div>
			</ControlBox>
		</>
	)
})

export default Login
