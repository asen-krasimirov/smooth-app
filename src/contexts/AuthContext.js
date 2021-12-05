import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};

export function AttachAuthContext({children}) {

    const initialUseData = {
		user_id: null,
		user_is_business: null,
		// AUTH_TOKEN: null
	};

	const [userInfo, updateUserInfo] = useLocalStorage('user', initialUseData);
	const [authToken, updateAuthToken] = useLocalStorage('authToken', '');

	const changeUserInfo = (data) => {
		updateUserInfo(data.user);
		updateAuthToken(data.token);
	};

	const clearUserInfo = () => {
		updateUserInfo(initialUseData);
		updateAuthToken('');
	};

    return <AuthContext.Provider value={{ userInfo, changeUserInfo, clearUserInfo, authToken }}>
        {children}
    </AuthContext.Provider>;
};
