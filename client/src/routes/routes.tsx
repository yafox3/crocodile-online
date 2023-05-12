import { IRoute } from '../models/models'
import ConnectToFriend from '../pages/ConnectToFriend/ConnectToFriend'
import Login from '../pages/Login/Login'
import Room from '../pages/Room/Room'
import Welcome from '../pages/Welcome/Welcome'
import { CONNECT_TO_FRIEND_ROUTE, LOGIN_ROUTE, ROOM_ROUTE, WELCOME_ROUTE } from '../utils/consts'

export const privateRoutes: IRoute[] = [
	{
		path: WELCOME_ROUTE,
		component: Welcome
	},
	{
		path: CONNECT_TO_FRIEND_ROUTE,
		component: ConnectToFriend
	},
	{
		path: ROOM_ROUTE,
		component: Room
	}
]

export const publicRoutes: IRoute[] = [
	{
		path: LOGIN_ROUTE,
		component: Login
	}
]