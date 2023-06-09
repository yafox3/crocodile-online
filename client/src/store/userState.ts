import { makeAutoObservable } from 'mobx'

class UserState {
	user: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	login(user: string) {
		this.user = user
	}
}
// eslint-disable-next-line
export default new UserState()