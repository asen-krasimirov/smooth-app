import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import * as userServices from '../services/userServices';

export const AuthContext = createContext();

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	return context;
};

const initialUserData = {
	id: null,
	is_business: null,
};

export function AttachAuthContext({ children }) {
	const [userInfo, updateUserInfo] = useLocalStorage('user', initialUserData);
	const [authToken, updateAuthToken] = useLocalStorage('authToken', '');
	const [isProfileComplete, updateIsProfileComplete] = useLocalStorage('isProfileComplete', false);

	const changeUserInfo = (data) => {
		updateUserInfo(data.user);
		updateAuthToken(data.token);
		changeProfileInfo(data.user.id);
	};

	const clearUserInfo = () => {
		updateUserInfo(initialUserData);
		updateAuthToken('');
		updateIsProfileComplete(false);
	};

	const changeProfileInfo = (userId) => {
		userServices.isProfileComplete(userId)
			.then(data => {
				updateIsProfileComplete(data.is_complete);
			});
	};

	return <AuthContext.Provider value={{
		userInfo,
		changeUserInfo,
		clearUserInfo,
		authToken,
		isAuthenticated: Boolean(userInfo.id),
		isProfileComplete,
		changeProfileInfo
	}}>
		{children}
	</AuthContext.Provider>;
};
