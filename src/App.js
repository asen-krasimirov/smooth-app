import './App.css';

import Header from './component/Header';
import Landing from './component/Landing';
import JobsBrowser from './component/JobsBrowser';

function App() {
	return (
		<>
			<Header />

			<main className="content-container">
				{/* <Landing /> */}
				<JobsBrowser />
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
