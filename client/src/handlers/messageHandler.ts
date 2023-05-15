import roomState from '../store/roomState'

export const messageHandler = (msg: any) => {
	roomState.setMessage(msg)
}