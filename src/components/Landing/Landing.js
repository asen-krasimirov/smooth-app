import './Landing.css';

import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing">
            <section className="heading">
                <div className="text-holder">
                    <h2>
                        A place where <span className="great-text">great</span> companies and <span
                            className="great-text">great</span> employees <span className="great-text">meet</span>
                    </h2>

                </div>

                <div className="image-holder">
                    <div className="image-inner-holder">
                        <img src="./static/images/handshake-shaking-hands.png" alt="hands-shaking" />
                    </div>

                </div>

            </section>

            <section className="generic-section about-reference">
                <h3>What is this about?</h3>
                <p className="main-text">
                    This is the <span className="great-text">Smooth App</span>. It aims to connect companies looking for
                    employees with people looking for a job. You can register either as a company or as an applicant looking
                    for work.
                </p>

                <a href="https://github.com/asen-krasimirov/smooth-app" className="btn">More Application Info</a>

            </section>

            <section className="generic-section company-side">
                <h3>Company Side</h3>

                <div className="possibility-holder">

                    <article className="possibility">
                        <div className="icon-holder">
                            <i className="fas fa-suitcase"></i>
                        </div>

                        <h4>Make Job Posts</h4>
                        <p>
                            Make posts, describing the job you are offering.
                        </p>
                    </article>

                    <div className="arrow-holder">
                        <i className="fas fa-arrow-down down-arrow"></i>
                        <i className="fas fa-arrow-right right-arrow"></i>
                    </div>

                    <article className="possibility">
                        <div className="icon-holder">
                            <i className="fas fa-users"></i>
                        </div>

                        <h4>See Applicants</h4>
                        <p>
                            Look at every candidate's education and skills.
                        </p>
                    </article>

                    <div className="arrow-holder">
                        <i className="fas fa-arrow-down down-arrow"></i>
                        <i className="fas fa-arrow-right right-arrow"></i>
                    </div>

                    <article className="possibility">
                        <div className="icon-holder">
                            <i className="fas fa-address-book"></i>
                        </div>

                        <h4>Contact</h4>
                        <p>
                            Contact the best applicant for you!
                        </p>
                    </article>
                </div>

                <Link to={'/sign-up?accountType=business'} className="btn">Create <span className="scale-up">Company</span> Account</Link>

            </section>

            <section className="generic-section applicant-side">
                <h3>Applicant Side</h3>

                <div className="possibility-holder">

                    <article className="possibility">
                        <div className="icon-holder">
                            <i className="fas fa-window-restore"></i>
                        </div>

                        <h4>Browser</h4>
                        <p>
                            Browser through all available job offers.
                        </p>
                    </article>

                    <div className="arrow-holder">
                        <i className="fas fa-arrow-down down-arrow"></i>
                        <i className="fas fa-arrow-right right-arrow"></i>
                    </div>

                    <article className="possibility">
                        <div className="icon-holder">
                            <i className="fas fa-crosshairs"></i>
                        </div>

                        <h4>Pick</h4>
                        <p>
                            Pick the best offers for you!
                        </p>
                    </article>

                    <div className="arrow-holder">
                        <i className="fas fa-arrow-down down-arrow"></i>
                        <i className="fas fa-arrow-right right-arrow"></i>
                    </div>

                    <article className="possibility">
                        <div className="icon-holder">
                            <i className="fas fa-check-double"></i>
                        </div>

                        <h4>Apply</h4>
                        <p>
                            Apply and see if it's a match!
                        </p>
                    </article>
                </div>

                <Link to={'/sign-up?accountType=applicant'} className="btn">Create <span className="scale-up">Applicant</span> Account</Link>

            </section>

        </div>
    );
}

export default Landing;
