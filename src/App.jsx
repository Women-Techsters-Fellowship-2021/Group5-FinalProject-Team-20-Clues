

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
		// import Dashboard from "./layouts/dashboard";
import Homepage from './pages/Homepage';



function App() {
  return (
    <div className="App">

    <BrowserRouter>	
    <Switch>
      {/* <Route exact path='/Homepage'>

        <Homepage />
      </Route>    */}
       {/* <Dashboard /> */}
		<Route exact path="/" component={Homepage}/>
      {/* </Route> */}

    </Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
