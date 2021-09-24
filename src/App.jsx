import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { routes } from './routes'
import Portal from './layouts/Portal';

// Assessment.
import Welcome from './pages/Assessment/Welcome';
import Steps from './pages/Assessment/Steps';


// import from components
import StateProvider from './components/stateprovider';
import './styles/register.css';
import './pages/Resetpassword';
import Resetpassword from './pages/Resetpassword';
import Homepage from './pages/Homepage';

const App = () => {
	return (
		<StateProvider>
			<Router>
				<Switch>
					{/* route to website landing page */}
					<Route exact path="/" component={Homepage}/>

					<Route path={routes.Login} component={Login}/>
					<Route path={routes.Register} component={Register}/>
					<Route path={routes.ResetPassword} component={Resetpassword}/>
					{/* {route to the patients dashboard}	 */}
					<Route path={ routes.Portal} component={ Portal } />

					{/* Assessment Questions */}
					<Route path="/welcome" component={ Welcome } />
					<Route path="/steps" component={ Steps } />
				</Switch>
			</Router>
		</StateProvider>
	);
};

export default App;