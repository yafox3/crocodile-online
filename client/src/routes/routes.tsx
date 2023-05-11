import { IRoute } from '../models/models'
import CreateRoom from '../pages/CreateRoom/CreateRoom'
import Login from '../pages/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import { CREATE_ROOM_ROUTE, LOGIN_ROUTE, WELCOME_ROUTE } from '../utils/consts'

export const privateRoutes: IRoute[] = [
	{
		path: WELCOME_ROUTE,
		component: Welcome
	},
	{
		path: CREATE_ROOM_ROUTE,
		component: CreateRoom
	},
]

export const publicRoutes: IRoute[] = [
	{
		path: LOGIN_ROUTE,
		component: Login
	}
]