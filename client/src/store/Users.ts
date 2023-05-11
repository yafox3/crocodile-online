import { makeAutoObservable } from 'mobx'

class Users {
	user: string | null = null

	constructor() {
		makeAutoObservable(this)
	}

	login(user: string) {
		this.user = user
	}
}
// eslint-disable-next-line
export default new Users()