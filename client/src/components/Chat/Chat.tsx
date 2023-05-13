import React, { useState } from 'react'
import { IMessage } from '../../models/models'
import roomState from '../../store/roomState'
import userState from '../../store/userState'
import Input from '../UI/Input/Input'
import s from './Chat.module.scss'
import MessageList from './MessageList/MessageList'

const Chat: React.FC = () => {
	const [message, setMessage] = useState('');

	const sendMessage = (event: React.FormEvent) => {
		event.preventDefault()
		
		if (message) {
			const newMessage: IMessage = {
				id: roomState.roomId,
				author: userState.user,
				text: message,
			}
			
			roomState.sendMessage(newMessage)
			setMessage('')
		}
	}

	return (
		<div className={s.chat}>
			<div className={s.chat__messages}>
				<MessageList />
			</div>
			<form className={s.chat__form} onSubmit={sendMessage}>
				<Input 
					w='100%' 
					placeholder='Введите слово'
					value={message}
					setValue={setMessage}
				/>
			</form>
		</div>
	)
}

export default Chat
