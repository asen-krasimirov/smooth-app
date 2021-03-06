import './ApplicantProfileManager.css';

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useCloudinaryImage from '../../hooks/useCloudinaryImage';
import { useAuthContext } from '../../contexts/AuthContext';

import * as userServices from '../../services/userServices';

import isApplicantProfile from '../../hoc/isApplicantProfile';

function ApplicantProfileManager() {
    const { profile_id } = useParams();
    const navigation = useNavigate();

    const { state: profileData } = useFetch('/auth/profile-details/' + profile_id, {});

    const { changeProfileInfo } = useAuthContext();

    const initialValidData = { isValid: true, errorMessages: [] };
    const [isFormValid, updateIsFormValid] = useState(initialValidData);

    const {
        image: iconImage,
        setImage: setIconImage,
        uploadImage: uploadIconImage,
    } = useCloudinaryImage();

    const {
        image: backgroundImage,
        setImage: setBackgroundImage,
        uploadImage: uploadBackgroundImage,
    } = useCloudinaryImage();

    const handleApplicantProfileManageForm = async (e) => {
        e.preventDefault();

        updateIsFormValid(initialValidData);

        const formData = new FormData(e.target);
        let body = Object.fromEntries(formData);

        body = await validateApplicantProfileManageForm(body);

        userServices.updateProfileDetails(profile_id, body)
            .then(responseData => {
                if (responseData['error_message']) {
                    let newErrorMessages = [];

                    try {
                        Object.values(responseData).forEach(
                            messages => messages.forEach(
                                message => newErrorMessages.push(message)
                            )
                        );
                    } catch (error) {
                        newErrorMessages = Object.values(responseData);
                    }

                    updateIsFormValid(oldState => { return { isValid: false, errorMessages: [...oldState.errorMessages, newErrorMessages] }; });
                } else {
                    navigation('/applicant-profile/' + profile_id);
                    changeProfileInfo(profile_id);
                };

            });

    };

    const validateApplicantProfileManageForm = async (body) => {
        let icon_image;
        let background_image;

        if (!iconImage) {
            icon_image = profileData.icon_image;
        } else {
            icon_image = await uploadIconImage();
        }

        if (!backgroundImage) {
            background_image = profileData.background_image;
        } else {
            background_image = await uploadBackgroundImage();
        }

        return {
            first_name: body.firstName,
            last_name: body.lastName,
            about_info: body.aboutInfo,

            icon_image: icon_image,
            background_image: background_image,

            education: body.education,
            skills: body.skills,
            applicant_blog: body.applicantBlog,
            phone_number: body.phoneNumber,
            preferred_position: body.preferredPosition,
        };
    };

    return (
        <div className="applicant-profile-manage">
            <section className="generic-section applicant-profile-manage-section">
                <h3>Update Profile Settings</h3>

                <form className="applicant-profile-manage-form" onSubmit={handleApplicantProfileManageForm}>

                    <div className="input-holder">
                        <label htmlFor="first-name-input">First Name:</label>
                        <input id="first-name-input" name="firstName" placeholder="Your first name..." defaultValue={profileData.first_name} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="last-name-input">Last Name:</label>
                        <input id="last-name-input" name="lastName" placeholder="Your last name..." defaultValue={profileData.last_name} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="about-info-input">About Info:</label>
                        <textarea id="about-info-input" name="aboutInfo"
                            placeholder="Put any information about yourself you think is important for your employers to know..." defaultValue={profileData.about_info} ></textarea>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="icon-image-input">Icon Image:</label>
                        <input id="icon-image-input" name="icon-image" type="file" onChange={(e) => setIconImage(e.target.files[0])} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="background-image-input">Background Image:</label>
                        <input id="background-image-input" name="background-image" type="file" onChange={(e) => setBackgroundImage(e.target.files[0])} />
                    </div>

                    {/* <div className="input-holder">
                        <label htmlFor="icon-image-input">Icon Image URL:</label>
                        <input id="icon-image-input" type="url" name="iconImage" placeholder="https://example.com"
                            pattern="https://.*" defaultValue={profileData.icon_image} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="background-image-input">Background Image URL:</label>
                        <input id="background-image-input" type="url" name="backgroundImage" placeholder="https://example.com"
                            pattern="https://.*" defaultValue={profileData.background_image} />
                    </div> */}

                    <div className="input-holder">
                        <label htmlFor="education-input">Education:</label>
                        <textarea id="education-input" name="education"
                            placeholder="Put all qualifications you have here... And use `;` after every qualification." defaultValue={profileData.education ? profileData.education.join(';') : ''} ></textarea>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="skills-input">Skills:</label>
                        <textarea id="skills-input" name="skills"
                            placeholder="Put all additional skills you have here... And use `;` after every skill." defaultValue={profileData.skills ? profileData.skills.join(';') : ''} ></textarea>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="phone-number-input">Phone Number:</label>
                        <input id="phone-number-input" name="phoneNumber" placeholder="Phone number for contact..." defaultValue={profileData.phone_number} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="preferred-position-input">Preferred Position:</label>
                        <input id="preferred-position-input" name="preferredPosition" placeholder="Wanted position ex.: Web Dev., Horse Keeper..." defaultValue={profileData.preferred_position} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="applicant-blog-input">Personal Website:</label>
                        <input id="applicant-blog-input" type="url" name="applicantBlog" placeholder="https://example.com"
                            pattern="https://.*" defaultValue={profileData.applicant_blog} />
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

export default isApplicantProfile(ApplicantProfileManager);
