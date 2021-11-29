/* eslint-disable curly */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

import * as userServices from '../../services/userServices';

function SignIn() {
    const [isFormValid, updateIsFormValid] = useState({ isValid: true, errorMessages: [] });
    const navigation = useNavigate();

    const handleSignInForm = e => {
        e.preventDefault();

        updateIsFormValid({ isValid: true, errorMessages: [] });

        const formData = new FormData(e.target);
        let body = Object.fromEntries(formData);

        userServices.login(body)
            .then(responseData => {
                if (!responseData['user']) {
                    const newErrorMessages = [responseData['error_message'][0]];

                    updateIsFormValid(oldState => { return { isValid: false, errorMessages: oldState.errorMessages.concat(newErrorMessages) }; });
                }
                else {
                    console.log(responseData);
                    navigation('/');
                }

            });
    };

    return (
        <div className="sign-in">
            <section className="generic-section sign-in-section">
                <h3 className="sign-in-title">Sign In</h3>

                <form className="sign-in-form" onSubmit={handleSignInForm} >

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
                    
                    {
                        !isFormValid.isValid
                            ? <ul className="error-list">
                                {isFormValid.errorMessages.map(message => <li
                                    key={message}
                                    className="error-message"
                                >{message}
                                </li>
                                )}
                            </ul>
                            : null
                    }

                    <button className="btn">Submit</button>
                </form>
            </section>

        </div>
    );
}

export default SignIn;
