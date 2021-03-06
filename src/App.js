/* eslint-disable no-negated-in-lhs */
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AttachAuthContext } from './contexts/AuthContext';

import Header from './components/Header';
import Landing from './components/Landing';
import ScrollReseter from './components/Common/ScrollReseter';

import JobsBrowser from './components/JobsBrowser';
import JobDetails from './components/JobDetails';
import JobCreate from './components/JobCreate';
import JobUpdate from './components/JobUpdate';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Logout from './components/Logout';

import ApplicantProfile from './components/ApplicantProfile';
import BusinessProfile from './components/BusinessProfile';

import ApplicantProfileManager from './components/ApplicantProfileManager';
import BusinessProfileManager from './components/BusinessProfileManager';

import AppliedJobs from './components/AppliedJobs';

import ProfileNotComplete from './components/ProfileNotComplete';

function App() {

	return (
		<AttachAuthContext>
			<Header />
			<ScrollReseter>

					<main className="content-container">
						<Routes>
							<Route path="/" element={<Landing />} />

							<Route path="/jobs" element={<JobsBrowser />} />
							<Route path="/jobs/:id" element={<JobDetails />} />

							<Route path="/applied-jobs" element={<AppliedJobs />} />

							<Route path="/create-job-post" element={<JobCreate />} />
							<Route path="/update-job-post/:id" element={<JobUpdate />} />

							<Route path="/applicant-profile/:profile_id" element={<ApplicantProfile />} />
							<Route path="/business-profile/:profile_id" element={<BusinessProfile />} />

							<Route path="/applicant-profile-manage/:profile_id" element={<ApplicantProfileManager />} />
							<Route path="/business-profile-manage/:profile_id" element={<BusinessProfileManager />} />

							<Route path="/sign-up" element={<SignUp />} />
							<Route path="/sign-in" element={<SignIn />} />
							<Route path="/logout" element={<Logout />} />

							<Route path="/profile-not-complete" element={<ProfileNotComplete />} />
						</Routes>
					</main>

			</ScrollReseter>

			<button id="buttonToTop" className="btn">
				<i className="fas fa-arrow-up"></i>
			</button>

			<footer className="main-footer">
				Asen Krasimirov &copy; All Rights Received
			</footer>
		</AttachAuthContext>
	);
}

export default App;
