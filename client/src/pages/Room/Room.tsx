import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import Canvas from '../../components/Canvas/Canvas'
import Chat from '../../components/Chat/Chat'
import ControlBox from '../../components/ControlBox/ControlBox'
import InviteFriend from '../../components/InviteFriend/InviteFriend'
import Button from '../../components/UI/Button/Button'
import Loader from '../../components/UI/Loader/Loader'
import { drawHandler } from '../../handlers/drawHandler'
import { messageHandler } from '../../handlers/messageHandler'
import { startGameHandler } from '../../handlers/startGameHandler'
import roomState from '../../store/roomState'
import userState from '../../store/userState'
import { WS_URL } from '../../utils/consts'
import s from './Room.module.scss'

const Room = observer(() => {
	const [invite, setInvite] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const socket = roomState.socket || new WebSocket(WS_URL)
		roomState.setSocket(socket)
		socket.onopen = () => {
			socket.send(
				JSON.stringify({
					id: roomState.roomId,
					user: userState.user,
					method: 'connection'
				})
			)
		}
		socket.onmessage = event => {
			const msg = JSON.parse(event.data)

			switch (msg.method) {
				case 'connection':
					setLoading(false)
					break
				case 'draw':
					drawHandler(msg)
					break
				case 'clear':
					drawHandler(msg)
					break
				case 'sendMessage':
					messageHandler(msg)
					break
				case 'startGame':
					startGameHandler(msg)
					break
			}
		}
	}, [])

	const isOwner = () => {
		return roomState.owner === userState.user
	}

	return (
		<div className={s.room}>
			<div className={s.room__btns}>
				{isOwner() && !roomState.currentWord && (
					<Button
						variant='primary'
						w='200px'
						h='40px'
						onClick={() => roomState.startGame()}>
						Начать игру
					</Button>
				)}
				<Button variant='secondary' w='200px' h='40px' onClick={() => setInvite(true)}>
					Пригласить друга
				</Button>
			</div>

			<InviteFriend show={invite} onHide={() => setInvite(false)} />

			<ControlBox w='1200px'>
				<div className={s.room__controlBox}>
					<Canvas />
					<Chat />
				</div>
			</ControlBox>
			{loading && <Loader />}
		</div>
	)
})

export default Room
