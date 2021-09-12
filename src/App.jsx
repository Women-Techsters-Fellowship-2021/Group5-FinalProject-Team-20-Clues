import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import Portal from './layouts/Portal';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path={ routes.Portal} component={ Portal } />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;