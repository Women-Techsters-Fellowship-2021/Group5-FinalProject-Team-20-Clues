import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Blog';
import Register from './pages/Register';
import Login from './pages/Login';

// import from components
import Navbar from './components/navbar';
import StateProvider from './components/stateprovider';
import './styles/main.css';
import './styles/register.css';



const App = () => {
	return (
		<StateProvider>
			<Router>
				<Navbar />

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
					<Route exact path='/home'>
						<Home />
					</Route>
					{/* render Post Component when we hit /post */}
					<Route exact path='/post'>
						<Posts />
					</Route>

					{/* render Home Component when we hit / */}
					<Route exact path='/'>
						<Home />
					</Route>

				</Switch>
			</Router>
		</StateProvider>
	);
};

export default App;
