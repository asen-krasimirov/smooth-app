import './SignIn.css';

function SignIn() {
    return (
        <div className="sign-in">
            <section className="generic-section sign-in-section">
                <h3>Sign In</h3>

                <form className="sign-in-form">

                    <div className="input-holder">
                        <label for="email-input">Email:</label>
                        <input id="email-input" name="email" type="email" placeholder="example@email.com" />
                    </div>

                    <div className="input-holder">
                        <label for="password-input">Password:</label>
                        <input id="password-input" name="password" type="password" placeholder="***************" />
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </section>

        </div>
    );
}

export default SignIn;
