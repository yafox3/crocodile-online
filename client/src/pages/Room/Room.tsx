import { useEffect } from 'react'
import Canvas from '../../components/Canvas/Canvas'
import Chat from '../../components/Chat/Chat'
import ControlBox from '../../components/ControlBox/ControlBox'
import Button from '../../components/UI/Button/Button'
import roomState from '../../store/roomState'
import userState from '../../store/userState'
import { drawHandler } from '../../utils/drawHandler'
import s from './Room.module.scss'
import { observer } from 'mobx-react-lite'

const Room = observer(() => {
	useEffect(() => {
		const socket = roomState.socket || new WebSocket('ws://localhost:5000/')
		roomState.setSocket(socket)
		socket.onopen = () => {
			socket.send(JSON.stringify({
				id: roomState.roomId,
				user: userState.user,
				method: 'connection'
			}))
		}
		socket.onmessage = (event) => {
			let msg = JSON.parse(event.data)

			switch(msg.method) {
				case 'connection':
					console.log(`Пользователь ${userState.user} подключился к комнате ${roomState.roomId}`)
					break
				case 'draw': 
					drawHandler(msg)
					break
			}
		}
	}, [])

	return (
		<div className={s.room}>
			<div className={s.room__btn}>
				<Button 
					variant='secondary'
					w='200px'
					h='40px'
				>
					Пригласить друга
				</Button>
			</div>

			<ControlBox w='1200px'>
				<div className={s.room__controlBox}>
					<Canvas />
					<Chat />
				</div>
			</ControlBox>
		</div>
	)
})

export default Room
