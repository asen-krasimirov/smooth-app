import './App.css';

import Landing from './component/Landing';

function App() {
	return (
		<>
			<header className="main-header">
				<a href="##">
					<h1>Smooth</h1>
				</a>

				<nav className="main-navigation">
					<ul>
						<li className="type2">
							<a href="##">Jobs</a>
						</li>

						<li className="type2">
							<a href="##">Applicants</a>
						</li>

						<li className="type2">
							<a href="##">Logout</a>
						</li>

						<li className="type2">
							<a href="##">Sign In</a>
						</li>

						<li className="type2">
							<a href="##">Sign Up</a>
						</li>

					</ul>

				</nav>
			</header>

			<main className="content-container">
				<Landing />
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
