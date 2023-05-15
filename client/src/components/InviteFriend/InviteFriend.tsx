import { useState } from 'react'
import { Alert, Modal } from 'react-bootstrap'
import roomState from '../../store/roomState'
import { copyToClipboard } from '../../utils/copyToClipboard'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

interface InviteFriendProps {
	show: boolean
	onHide: () => void
} 

const InviteFriend = ({show, onHide}: InviteFriendProps) => {
	const [alert, setAlert] = useState(false)

	const showAlert = () => {
		setAlert(true)
		setTimeout(() => {
			setAlert(false)
			onHide()
		}, 600)
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size='sm'
			centered
		>
			<Modal.Body className='d-flex flex-column gap-3 align-items-center bg-success'>
				<h4 className='m-0 text-white'>ID вашей комнаты</h4>
				<Input 
					value={roomState.roomId}
					disabled
				/>
				{alert && <Alert variant='success' className='m-1'>
					ID успешно скопирован!
				</Alert>}
				<Button 
					variant='secondary' 
					onClick={() => {
						copyToClipboard(roomState.roomId)
						showAlert()
					}}
					h='40px'
				>
					Скопировать
				</Button>
			</Modal.Body>
		</Modal>
	)
}

export default InviteFriend
