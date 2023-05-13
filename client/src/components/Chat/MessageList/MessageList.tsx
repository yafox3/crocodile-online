import React from 'react'
import { IMessage } from '../../../models/models'
import roomState from '../../../store/roomState'
import Message from '../Message/Message'
import s from './MessageList.module.scss'

const MessageList: React.FC = () => {
	return (
		<div className={s.messages}>
			{roomState.messages.map((message: IMessage) => 
				<Message message={message} key={message.id}/>
			)}
		</div>
	)
}

export default MessageList
