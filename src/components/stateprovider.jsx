import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

let initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
	firstName: null,
	
};

export default function StateProvider({ children }) {
	const [appData, setAppData] = useState(initialState);

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(res => res.json())
	// 		.then(result => {
	// 			console.log(result);
	// 			setAppData(prevValue => {
	// 				return {
	// 					...prevValue,
	// 					posts: result,
	// 				};
	// 			});
	// 		});
	// }, []);

	return (
		<AppContext.Provider value={{ state: appData, setState: setAppData }}>
			{children}
		</AppContext.Provider>
	);
}
