import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ControlBox from '../../components/ControlBox/ControlBox'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import roomState from '../../store/roomState'
import { ROOM_ROUTE, WELCOME_ROUTE, WS_URL } from '../../utils/consts'
import s from './ConnectToFriend.module.scss'

const ConnectToFriend: React.FC = () => {
	const navigate = useNavigate()
	const [roomId, setRoomId] = useState('');

	const comebackHandler = () => {
		navigate(WELCOME_ROUTE)
	}

	const connectHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (roomId) {
			const socket = new WebSocket(WS_URL)
			roomState.setSocket(socket)
			roomState.connectToRoom(roomId)
			navigate(ROOM_ROUTE)
		}
	}

	return (
		<>
			<Logo />
			<ControlBox>
				<h2 className='title'>Введите ID комнаты</h2>
				<form className={s.form} onSubmit={connectHandler}>
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
				</form>
			</ControlBox>
		</>
	)
}

export default ConnectToFriend
