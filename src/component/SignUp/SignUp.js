import './SignUp.css';

function SignUp() {
    return (
        <div className="sign-up">
            <section className="generic-section sign-up-section">
                <h3>Sign Up</h3>

                <form className="sign-up-form">

                    <div className="input-holder">
                        <label htmlFor="email-input">Email:</label>
                        <input id="email-input" name="email" type="email" placeholder="example@email.com" />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="password-input">Password:</label>
                        <input id="password-input" name="password" type="password" placeholder="***************" />
                    </div>

                    <div className="input-holder repeat-label">
                        <label htmlFor="repeat-password-input">Repeat Password:</label>
                        <input id="repeat-password-input" name="repeat-password" type="password" placeholder="***************" />
                    </div>

                    <div className="input-holder account-type">
                        <p className="label-text">Account Type:</p>

                        <div className="account-type-input">
                            <input type="radio" id="business" name="account-type" value="business" defaultChecked />
                            <label htmlFor="business">Business</label>
                        </div>

                        <div className="account-type-input">
                            <input type="radio" id="applicant" name="account-type" value="applicant" />
                            <label htmlFor="applicant">Applicant</label>
                        </div>
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </section>

        </div>
    );
}

export default SignUp;