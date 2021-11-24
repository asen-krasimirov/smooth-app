function Header() {
    return (
        <header className="main-header">
            <a href="##">
                <h1>Smooth</h1>
            </a>

            <nav className="main-navigation">
                <ul>
                    <div className="browser-link-holder">
                        <li className="type2">
                            <a href="##">Jobs</a>
                        </li>

                        {/* <li className="type2">
                        <a href="##">Applicants</a>
                    </li> */}

                    </div>

                    <div className="management-link-holder">
                        {/* <li className="type2">
                        <a href="##">Create Post</a>
                    </li> */}

                        <li className="type2">
                            <a href="##">Manage Applied Jobs</a>
                        </li>

                    </div>

                    <div className="auth-link-holder">

                        <li className="type2">
                            <a href="##">Logout</a>
                        </li>

                        {/* <li className="type2">
                        <a href="##">Sign In</a>
                    </li> */}

                        {/* <li className="type2">
                        <a href="##">Sign Up</a>
                    </li> */}
                    </div>

                </ul>

            </nav>
        </header>
    );
}

export default Header;
