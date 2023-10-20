import roomState from '../store/roomState'

interface StartGameResponse {
	id: string
	word: string
	drawer: string
	method: string
}

export const startGameHandler = (msg: StartGameResponse) => {
	roomState.setDrawer(msg.drawer)
	roomState.setWord(msg.word)
}