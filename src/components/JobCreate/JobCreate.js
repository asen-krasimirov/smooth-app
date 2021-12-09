import './JobCreate.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as jobServices from '../../services/jobServices';

import isBusinessProfile from '../../hoc/isBusinessProfile';

function JobCreate() {
    const navigation = useNavigate();

    const initialValidData = { isValid: true, errorMessages: [] };
    const [isFormValid, updateIsFormValid] = useState(initialValidData);

    const handleJobManageForm = (e) => {
        e.preventDefault();

        updateIsFormValid(initialValidData);

        const formData = new FormData(e.target);
        let body = Object.fromEntries(formData);

        body = validateJobManageForm(body);

        jobServices.createJob(body)
            .then(responseData => {
                if (responseData['error_message']) {
                    let newErrorMessages = [];

                    try {
                        Object.values(responseData).forEach(
                                messages => messages.forEach(
                                    message => newErrorMessages.push(message)
                                )
                        );
                    } catch(error) {
                        newErrorMessages = Object.values(responseData);
                    }

                    updateIsFormValid(oldState => { return { isValid: false, errorMessages: oldState.errorMessages.concat(newErrorMessages) }; });
                } else {
                    navigation('/jobs/' + responseData.id); // TODO: change to job page
                };

            });

    };

    const validateJobManageForm = (body) => {

        return {
            title: body.title,
            description: body.description,
            type: body.type,
            status: body.status,
        };
    };

    return (
        <div className="job-create">
            <section className="generic-section job-create-section">
                <h3>Job Create</h3>

                <form className="job-create-form" onSubmit={handleJobManageForm}>

                    <div className="input-holder">
                        <label htmlFor="title-input">Job Title:</label>
                        <input id="title-input" name="title" placeholder="The title of the job..." />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="description-input">Job Description:</label>
                        <textarea id="description-input" name="description"
                            placeholder="Put information describing every aspect of the job you are offering... Make sure to include- qualifications required, what the applicants are going to do on the job and any other details as you see fit..."></textarea>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="job-type-input">Job Type:</label>
                        <select name="type" id="job-type-input">
                            <option value="FT">Full Time</option>
                            <option value="PT">Part Time</option>
                        </select>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="job-status-input">Job status:</label>
                        <select name="status" id="job-status-input">
                            <option value="AH">Active Hiring (urgent)</option>
                            <option value="PH">Passive Hiring (not urgent)</option>
                        </select>
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

export default isBusinessProfile(JobCreate);
