import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import JobsBrowser from './components/JobsBrowser';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BusinessProfileManager from './components/BusinessProfileManager';

function App() {
	return (
		<>
			<Header />

			<main className="content-container">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/jobs" element={<JobsBrowser />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/business-profile-manage" element={<BusinessProfileManager />} />
				</Routes>
			</main>

			<button id="buttonToTop" className="btn">
				<i className="fas fa-arrow-up"></i>
			</button>

			<footer className="main-footer">
				Asen Krasimirov &copy; All Rights Received
			</footer>
		</>
	);
}

export default App;
