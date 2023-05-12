import React from 'react'
import Input from '../UI/Input/Input'
import s from './Chat.module.scss'
import MessageList from './MessageList/MessageList'

const Chat: React.FC = () => {
	return (
		<div className={s.chat}>
			<div className={s.chat__messages}>
				<MessageList />
			</div>
			<div className={s.chat__input}>
				<Input w='100%' placeholder='Введите слово'/>
			</div>
		</div>
	)
}

export default Chat
