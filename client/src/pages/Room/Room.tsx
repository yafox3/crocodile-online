import Canvas from '../../components/Canvas/Canvas'
import Chat from '../../components/Chat/Chat'
import ControlBox from '../../components/ControlBox/ControlBox'
import Button from '../../components/UI/Button/Button'
import s from './Room.module.scss'

const Room = () => {
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
}

export default Room
