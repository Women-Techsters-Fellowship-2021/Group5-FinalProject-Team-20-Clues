import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';



function App() {
  return (
    <div className="App">

    <BrowserRouter>	
    <Switch>
      <Route exact path='/Homepage'>

        <Homepage />
      </Route>   
       
    <Route exact path="/" component={Homepage}>
      </Route>

    </Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
