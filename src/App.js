/* eslint-disable no-negated-in-lhs */
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';

import Header from './components/Header';
import Landing from './components/Landing';
import JobsBrowser from './components/JobsBrowser';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BusinessProfileManager from './components/BusinessProfileManager';

function App() {
	const initialUseData = {
		user_id: null,
		user_is_business: null,
		AUTH_TOKEN: null
	};

	const [userInfo, updateUserInfo] = useState(initialUseData);

	const changeUserInfo = (data) => {
		updateUserInfo(data);
	};

	if (sessionStorage.getItem('AUTH_TOKEN') && !userInfo.hasOwnProperty('user_id')) {
		let user_id = sessionStorage.getItem('user_id');
		let user_is_business = sessionStorage.getItem('user_is_business');
		let token = sessionStorage.getItem('AUTH_TOKEN');

		changeUserInfo({
			user_id,
			user_is_business,
			token
		});
	}

	return (
		<AuthContext.Provider value={{ userInfo, changeUserInfo }}>
			<>
				<Header />

				<main className="content-container">
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/jobs" element={<JobsBrowser />} />
						<Route path="/sign-up" element={<SignUp />} />
						<Route path="/sign-in" element={<SignIn />} />
						<Route path="/business-profile-manage/:profile_id" element={<BusinessProfileManager />} />
					</Routes>
				</main>

				<button id="buttonToTop" className="btn">
					<i className="fas fa-arrow-up"></i>
				</button>

				<footer className="main-footer">
					Asen Krasimirov &copy; All Rights Received
				</footer>
			</>
		</AuthContext.Provider>
	);
}

export default App;
