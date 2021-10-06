import { createContext,useState } from 'react';

export const AppContext = createContext();

let initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
	firstName: null,
	
};

export default function StateProvider({ children }) {
	const [appData, setAppData] = useState(initialState);

	return (
		<AppContext.Provider value={{ state: appData, setState: setAppData }}>
			{children}
		</AppContext.Provider>
	);
}
