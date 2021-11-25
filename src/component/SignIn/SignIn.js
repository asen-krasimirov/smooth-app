import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
    return (
        <div className="sign-in">
            <section className="generic-section sign-in-section">
                <h3 className="sign-in-title">Sign In</h3>

                <form className="sign-in-form">

                    <div className="input-holder">
                        <label htmlFor="email-input">Email:</label>
                        <input id="email-input" name="email" type="email" placeholder="example@email.com" />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="password-input">Password:</label>
                        <input id="password-input" name="password" type="password" placeholder="***************" />
                    </div>

                    <p className="redirect-link">
                        If you have not signed-up yet, you can do it <Link to="/sign-up" className="link">here</Link>.
                    </p>

                    <button className="btn">Submit</button>
                </form>
            </section>

        </div>
    );
}

export default SignIn;
