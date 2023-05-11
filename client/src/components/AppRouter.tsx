import { observer } from 'mobx-react-lite'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import { privateRoutes, publicRoutes } from '../routes/routes'
import user from '../store/User'

const AppRouter: React.FC = observer(() => {
	if (user.user) {
		return (
			<Routes>
				{privateRoutes.map(({path, component}) => 
					<Route path={path} Component={component} key={path}/>
				)}
				<Route path='*' Component={Welcome}/>
			</Routes>
		)
	}

	return (
		<Routes>
			{publicRoutes.map(({path, component}) => 
				<Route path={path} Component={component} key={path}/>
			)}
			<Route path='*' Component={Login}/>
		</Routes>
	)
})

export default AppRouter
