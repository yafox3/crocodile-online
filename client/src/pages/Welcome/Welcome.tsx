import React from 'react'
import { useNavigate } from 'react-router-dom'
import ControlBox from '../../components/ControlBox/ControlBox'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/UI/Button/Button'
import roomState from '../../store/roomState'
import userState from '../../store/userState'
import { CONNECT_TO_FRIEND_ROUTE, ROOM_ROUTE, WS_URL } from '../../utils/consts'
import s from './Welcome.module.scss'

const Welcome: React.FC = () => {
	const navigate = useNavigate()

	const createRoomHandler = () => {
		const socket = new WebSocket(WS_URL)
		roomState.setSocket(socket)
		roomState.createRoom()
		navigate(ROOM_ROUTE)
	}

	const connectToFriendHandler = () => {
		navigate(CONNECT_TO_FRIEND_ROUTE)
	}

	return (
		<>
			<Logo />
			<ControlBox>
				<h2 className='title'>Привет, {userState.user}!</h2>
				<div className={s.controls}>
					<Button 
						variant='primary'
						w='250px'
						h='50px'
						onClick={createRoomHandler}
					>
						Создать комнату
					</Button>
					<Button 
						variant='secondary'
						w='250px'
						h='50px'
						onClick={connectToFriendHandler}
					>
						Подключиться к другу
					</Button>
				</div>
			</ControlBox>
		</>
	)
}

export default Welcome
