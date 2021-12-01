import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import './BusinessProfileManager.css';

import * as userServices from '../../services/userServices';

function BusinessProfileManager() {
    const [isFormValid, updateIsFormValid] = useState({ isValid: true, errorMessages: [] });
    const [profileData, updateProfileData] = useState({});

    const { userInfo } = useContext(AuthContext);

    const { profile_id } = useParams();
    const navigation = useNavigate();

    useEffect(() => {
        userServices.getProfileDetails(profile_id)
            .then(data => {
                updateProfileData(data);
            });
    }, [profile_id]);

    const handleBusinessProfileManageForm = (e) => {
        e.preventDefault();

        updateIsFormValid({ isValid: true, errorMessages: [] });

        const formData = new FormData(e.target);
        let body = Object.fromEntries(formData);

        body = validateBusinessProfileManageForm(body);

        userServices.updateProfileDetails(profile_id, body)
            .then(responseData => {
                console.log(responseData);
                if (responseData['error_message']) {
                    const newErrorMessages = [];

                    Object.values(responseData).forEach(
                        messages => messages.forEach(
                            message => newErrorMessages.push(message)
                        )
                    );

                    updateIsFormValid(oldState => { return { isValid: false, errorMessages: oldState.errorMessages.concat(newErrorMessages) }; });
                } else {
                    navigation('/'); // TODO: change to profile page
                };

            });

    };

    const validateBusinessProfileManageForm = (body) => {

        return {
            name: body.name,
            sub_name: body.subName,
            about_info: body.aboutInfo,
            icon_image: body.iconImage,
            background_image: body.backgroundImage,
            business_website: body.businessWebsite,
        };
    };

    return (
        <div className="business-profile-manage">
            <section className="generic-section business-profile-manage-section">
                <h3>Update Profile Settings</h3>

                <form className="business-profile-manage-form" onSubmit={handleBusinessProfileManageForm}>

                    <div className="input-holder">
                        <label htmlFor="name-input">Company Name:</label>
                        <input id="name-input" name="name" placeholder="Company's name..." defaultValue={profileData.name} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="sub-name-input">Secondary Company Name:</label>
                        <input id="sub-name-input" name="subName" placeholder="Company's secondary name..." defaultValue={profileData.sub_name} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="about-info-input">About Info:</label>
                        <textarea id="about-info-input" name="aboutInfo"
                            placeholder="Put description of your company, things to expect or any useful information..." defaultValue={profileData.about_info} ></textarea>
                    </div>

                    {/* <div className="input-holder">
                        <label htmlFor="icon-image-input">Icon Image:</label>
                        <input id="icon-image-input" name="iconImage" type="file" defaultValue={profileData.icon_image} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="background-image-input">Background Image:</label>
                        <input id="background-image-input" name="backgroundImage" type="file" defaultValue={profileData.background_image} />
                    </div> */}

                    <div className="input-holder">
                        <label htmlFor="icon-image-input">Icon Image URL:</label>
                        <input id="icon-image-input" type="url" name="iconImage" placeholder="https://example.com"
                            pattern="https://.*" defaultValue={profileData.icon_image} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="background-image-input">Background Image URL:</label>
                        <input id="background-image-input" type="url" name="backgroundImage" placeholder="https://example.com"
                            pattern="https://.*" defaultValue={profileData.background_image} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="business-blog-input">Company Website:</label>
                        <input id="business-blog-input" type="url" name="businessWebsite" placeholder="https://example.com"
                            pattern="https://.*" defaultValue={profileData.business_website} />
                    </div>
                    
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

export default BusinessProfileManager;