// import Dashboard from "./layouts/dashboard";


// function App() {
//   return (
//     <div>
//       <p>
//         <Dashboard />
//       </p>
//     </div>
//   );
// }

// export default App;
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
