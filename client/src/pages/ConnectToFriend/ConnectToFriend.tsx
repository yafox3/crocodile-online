import React, { useState } from 'react'
import ControlBox from '../../components/ControlBox/ControlBox'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import s from './ConnectToFriend.module.scss'
import { useNavigate } from 'react-router-dom'
import { WELCOME_ROUTE } from '../../utils/consts'

const ConnectToFriend: React.FC = () => {
	const navigate = useNavigate()
	const [roomId, setRoomId] = useState('');

	const comebackHandler = () => {
		navigate(WELCOME_ROUTE)
	}

	const connectHandler = () => {
		if (roomId) {
			console.log(roomId)
		}
	}

	return (
		<>
			<Logo />
			<ControlBox>
				<h2 className='title'>Введите ID комнаты</h2>
				<div className={s.form}>
					<Input
						placeholder='ID комнаты'
						w='100%'
						h='50px'
						type='number'
						value={roomId}
						setValue={setRoomId}
					/>
					<Button
						variant='primary' 
						w='190px'
						h='40px'
						onClick={connectHandler}
					>
						Подключиться
					</Button>
					<Button
						variant='secondary' 
						w='190px'
						h='40px'
						onClick={comebackHandler}
					>
						Назад
					</Button>
				</div>
			</ControlBox>
		</>
	)
}

export default ConnectToFriend
