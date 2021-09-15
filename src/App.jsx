import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { routes } from './routes'
import Portal from './layouts/Portal';


// import from components
import StateProvider from './components/stateprovider';
import './styles/register.css';
import './pages/Resetpassword';
import Resetpassword from './pages/Resetpassword';



const App = () => {
	return (
		<StateProvider>
			<Router>
				<Switch>
					{/* render Register Component when we hit /register */}
					<Route exact path='/register'>
						<Register />
					</Route>

					{/* render Login Component when we hit /login */}
					<Route exact path='/login'>
						<Login />
					</Route>

					{/* render Home Component when we hit /home */}
					<Route exact path='/resetpassword'>
						<Resetpassword />
					</Route>
					

					{/* render Home Component when we hit / */}
					<Route exact path='/'>
						<Home />
					</Route>

					{/* {route to the oatients dashboard}	 */}
					<Route path={ routes.Portal} component={ Portal } />

				</Switch>
			</Router>
		</StateProvider>
	);
};

export default App;