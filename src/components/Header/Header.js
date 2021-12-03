import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({
    userInfo
}) {

    const jobsLink = <li className="type2">
        <NavLink to="/jobs" className={status => status.isActive ? 'active' : ''}>Jobs</NavLink>
    </li>;

    const applicantsLink = <li className="type2">
        <NavLink to="/applicants" className={status => status.isActive ? 'active' : ''}>Applicants</NavLink>
    </li>;

    const createPostLink = <li className="type2">
        <NavLink to="/create-job-post" className={status => status.isActive ? 'active' : ''}>Create Post</NavLink>
    </li>;

    const appliedJobsLink = <li className="type2">
        <NavLink to="/applied-jobs" className={isActive => isActive ? 'active' : ''}>Manage Applied Jobs</NavLink>
    </li>;

    const profileLink = <li className="type2">
        <NavLink to="/profile" className={status => status.isActive ? 'active' : ''}>Profile</NavLink>
    </li>;

    const signInLink = <li className="type2">
        <NavLink to="/sign-in" className={status => status.isActive ? 'active' : ''}>Sign In</NavLink>
    </li>;

    // const signUpLink = <li className="type2">
    //     <NavLink to="/sign-up" className={status => status.isActive ? 'active' : ''}>Sign Up</NavLink>
    // </li>;

    const logoutLink = <li className="type2">
        <NavLink to="/logout" className={status => status.isActive ? 'active' : ''}>Logout</NavLink>
    </li>;

    return (
        <header className="main-header">
            <NavLink to="/">
                <h1>Smooth</h1>
            </NavLink>

            <nav className="main-navigation">
                <ul>
                    <div className="browser-link-holder">
                        {
                            userInfo.id
                                ? userInfo.is_business
                                    ? applicantsLink
                                    : jobsLink
                                : jobsLink
                        }

                    </div>

                    <div className="management-link-holder">
                        {
                            userInfo.id
                                ? userInfo.is_business
                                    ? createPostLink
                                    : appliedJobsLink
                                : null
                        }

                    </div>

                    <div className="profile-link-holder">
                        {
                            userInfo.id
                                ? profileLink
                                : null
                        }

                    </div>

                    <div className="auth-link-holder">
                        {
                            userInfo.id
                                ? logoutLink
                                : signInLink
                        }

                    </div>

                </ul>

            </nav>
        </header>
    );
}

export default Header;
