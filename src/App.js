import { Routes, Route } from 'react-router-dom';

import Header from './component/Header';
import Landing from './component/Landing';
import JobsBrowser from './component/JobsBrowser';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';

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
