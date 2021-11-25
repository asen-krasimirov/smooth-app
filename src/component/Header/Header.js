import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="main-header">
            <NavLink to="/">
                <h1>Smooth</h1>
            </NavLink>

            <nav className="main-navigation">
                <ul>
                    <div className="browser-link-holder">
                        <li className="type2">
                            <NavLink to="/jobs" className={status => status.isActive ? 'active' : ''}>Jobs</NavLink>
                        </li>

                        {/* <li className="type2">
                            <NavLink to="/applicants" className={status => status.isActive ? 'active' : ''}>Applicants</NavLink>
                        </li> */}

                    </div>

                    <div className="management-link-holder">
                        {/* <li className="type2">
                            <NavLink to="/create-post" className={status => status.isActive ? 'active' : ''}>Create Post</NavLink>
                        </li> */}

                        {/* <li className="type2">
                            <NavLink to="/applied-jobs" className={ isActive => isActive ? 'active' : '' }>Manage Applied Jobs</NavLink>
                        </li> */}

                    </div>

                    <div className="profile-link-holder">
                        {/* <li className="type2">
                            <NavLink to="/profile" className={status => status.isActive ? 'active' : ''}>Profile</NavLink>
                        </li> */}

                    </div>

                    <div className="auth-link-holder">
                        {/* <li className="type2">
                            <NavLink to="/logout" className={status => status.isActive ? 'active' : ''}>Logout</NavLink>
                        </li> */}

                        <li className="type2">
                            <NavLink to="/sign-in" className={status => status.isActive ? 'active' : ''}>Sign In</NavLink>
                        </li>

                        <li className="type2">
                            <NavLink to="/sign-up" className={status => status.isActive ? 'active' : ''}>Sign Up</NavLink>
                        </li>

                    </div>

                </ul>

            </nav>
        </header>
    );
}

export default Header;
