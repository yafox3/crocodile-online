import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import { privateRoutes, publicRoutes } from '../routes/routes'

const AppRouter: React.FC = () => {
	const user = true
	
	if (user) {
		return (
			<Routes>
				{privateRoutes.map(({path, component}) => 
					<Route path={path} Component={component}/>
				)}
				<Route path='*' Component={Welcome}/>
			</Routes>
		)
	}

	return (
		<Routes>
			{publicRoutes.map(({path, component}) => 
				<Route path={path} Component={component}/>
			)}
			<Route path='*' Component={Login}/>
		</Routes>
	)
}

export default AppRouter
