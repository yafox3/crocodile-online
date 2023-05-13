import React from 'react'
import { IMessage } from '../../../models/models'
import roomState from '../../../store/roomState'
import Message from '../Message/Message'
import s from './MessageList.module.scss'
import { observer } from 'mobx-react-lite'

const MessageList: React.FC = observer(() => {
	return (
		<div className={s.messages}>
			{roomState.messages.map((message: IMessage, index: number) => 
				<Message message={message} key={index}/>
			)}
		</div>
	)
})

export default MessageList
