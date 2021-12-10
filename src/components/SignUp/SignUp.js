/* eslint-disable curly */

import './SignUp.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useQueryParams from '../../hooks/useQueryParams';

import { useAuthContext } from '../../contexts/AuthContext';

import * as userServices from '../../services/userServices';

function SignUp() {
    const [isFormValid, updateIsFormValid] = useState({ isValid: true, errorMessages: [] });

    const navigation = useNavigate();
    const { changeUserInfo } = useAuthContext();

    const params = useQueryParams();
    const accountType = params.get('accountType');

    const [selectedAccountType, setSelectedAccountType] = useState(accountType ? accountType : 'business');

    const handleSignUpForm = e => {
        e.preventDefault();

        updateIsFormValid({ isValid: true, errorMessages: [] });

        const formData = new FormData(e.target);
        let { email, password, repeatPassword, accountType } = Object.fromEntries(formData);

        const body = validateSignUpFormData(email, password, repeatPassword, accountType);

        if (!body) return;

        userServices.register(body)
            .then(responseData => {
                if (!responseData['user']) {
                    const newErrorMessages = [];

                    if (!responseData['error_message']) {
                        Object.values(responseData).forEach(
                            messages => messages.forEach(
                                message => newErrorMessages.push(message)
                            )
                        );
                    } else newErrorMessages.push(responseData['error_message']);


                    // const newErrorMessages = Object.values(responseData).reduce((a, messages) => {
                    //     messages.forEach(message => a.push(message));
                    //     return a;
                    // }, []);

                    updateIsFormValid(oldState => { return { isValid: false, errorMessages: oldState.errorMessages.concat(newErrorMessages) }; });

                } else {
                    changeUserInfo(responseData);

                    let redirectUrl = responseData.user.is_business
                        ? '/business-profile-manage/'
                        : '/applicant-profile-manage/';

                    navigation(redirectUrl + responseData['user'].id);
                };

            });

    };

    const validateSignUpFormData = (email, password, repeatPassword, accountType) => {
        if (password !== repeatPassword) {
            updateIsFormValid(oldState => {
                return {
                    isValid: false,
                    errorMessages: oldState.errorMessages.concat(['The two passwords should be the same!'])
                };
            });
        };

        if (!['business', 'applicant'].includes(accountType)) {
            updateIsFormValid(oldState => {
                return {
                    isValid: false,
                    errorMessages: oldState.errorMessages.concat(['The account type should be one of the displayed!'])
                };
            });
        };

        return {
            email,
            password,
            is_business: accountType === 'business'
        };
    };

    const onRadioChange = (e) => {
        setSelectedAccountType(e.target.value);
    };

    return (
        <div className="sign-up">
            <section className="generic-section sign-up-section">
                <h3 className="sign-up-title">Sign Up</h3>

                <form className="sign-up-form" onSubmit={handleSignUpForm} >

                    <div className="input-holder">
                        <label htmlFor="email-input">Email:</label>
                        <input id="email-input" name="email" type="email" placeholder="example@email.com" autoComplete="off" />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="password-input">Password:</label>
                        <input id="password-input" name="password" type="password" placeholder="***************" />
                    </div>

                    <div className="input-holder repeat-label">
                        <label htmlFor="repeat-password-input">Repeat Password:</label>
                        <input id="repeat-password-input" name="repeatPassword" type="password" placeholder="***************" />
                    </div>

                    <div className="input-holder account-type" onChange={onRadioChange}>
                        <p className="label-text">Account Type:</p>

                        <div className="account-type-input" >
                            <input type="radio" id="business" name="accountType" defaultValue="business" defaultChecked={selectedAccountType === 'business'} />
                            <label htmlFor="business" className={selectedAccountType === 'business' ? 'selected' : ''} >Business</label>
                        </div>

                        <div className="account-type-input">
                            <input type="radio" id="applicant" name="accountType" defaultValue="applicant" defaultChecked={selectedAccountType === 'applicant'}/>
                            <label htmlFor="applicant" className={selectedAccountType === 'applicant' ? 'selected' : ''} >Applicant</label>
                        </div>
                    </div>

                    <p className="redirect-link">
                        If you already signed-up, you can sign in <Link to="/sign-in" className="link">here</Link>.
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

export default SignUp;
