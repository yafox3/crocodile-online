import { IMessage } from '../../../models/models'
import s from './Message.module.scss'

interface MessageProps {
	message: IMessage
}

const Message = ({message}: MessageProps) => {
	return (
		<div className={s.message}>
			<h5 className={s.message__author}>{message.author}</h5>
			<p className={s.message__text}>{message.text}</p>
		</div>
	)
}

export default Message
