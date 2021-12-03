/* eslint-disable no-negated-in-lhs */
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';

import Header from './components/Header';
import Landing from './components/Landing';
import JobsBrowser from './components/JobsBrowser';
import JobDetails from './components/JobDetails';
import JobCreate from './components/JobCreate';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Logout from './components/Logout';

import BusinessProfileManager from './components/BusinessProfileManager';
import ApplicantProfileManager from './components/ApplicantProfileManager';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
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

	return (
		<AuthContext.Provider value={{ userInfo, changeUserInfo, clearUserInfo, authToken }}>
			<>
				<Header userInfo={userInfo} />

				<main className="content-container">
					<Routes>
						<Route path="/" element={<Landing />} />
						
						<Route path="/jobs" element={<JobsBrowser />} />
						<Route path="/jobs/:id" element={<JobDetails />} />
						<Route path="/create-job-post" element={<JobCreate />} />
						{/* <Route path="/manage-job-post/:job_id" element={<JobCreate />} /> */}

						<Route path="/sign-up" element={<SignUp />} />
						<Route path="/sign-in" element={<SignIn />} />
						<Route path="/logout" element={<Logout />} />

						<Route path="/business-profile-manage/:profile_id" element={<BusinessProfileManager />} />
						<Route path="/applicant-profile-manage/:profile_id" element={<ApplicantProfileManager />} />
						
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
