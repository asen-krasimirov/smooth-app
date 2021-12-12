/* eslint-disable curly */
import './JobUpdate.css';

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import * as jobServices from '../../services/jobServices';

import isBusinessProfile from '../../hoc/isBusinessProfile';

function JobUpdate() {
    const { id } = useParams();
    const navigation = useNavigate();
    const { state: jobDetails } = useFetch('/jobs/' + id, {});

    const job = jobDetails.job || {};

    const initialValidData = { isValid: true, errorMessages: [] };
    const [isFormValid, updateIsFormValid] = useState(initialValidData);

    const handleJobManageForm = (e) => {
        e.preventDefault();

        updateIsFormValid(initialValidData);

        const formData = new FormData(e.target);
        let body = Object.fromEntries(formData);

        body = validateJobManageForm(body);

        if (!body) return;

        jobServices.updateJob(id, body)
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

                    updateIsFormValid(oldState => { return { isValid: false, errorMessages: oldState.errorMessages.concat(newErrorMessages) }; });
                } else {
                    navigation('/jobs/' + responseData.job.id); // TODO: change to job page
                };

            });

    };

    const validateJobManageForm = (body) => {
        if (body.description.length > 2500) {
            updateIsFormValid(oldState => {
                return {
                    isValid: false,
                    errorMessages: [...oldState.errorMessages, 'The max description length is 2500 characters!']
                };
            });
            return;
        }
        
        return {
            title: body.title,
            description: body.description,
            type: body.type,
            status: body.status,
        };
    };

    return (
        <div className="job-update">
            <section className="generic-section job-update-section">
                <h3>Job Update</h3>

                <form className="job-update-form" onSubmit={handleJobManageForm}>

                    <div className="input-holder">
                        <label htmlFor="title-input">Job Title:</label>
                        <input id="title-input" name="title" placeholder="The title of the job..." defaultValue={job.title} />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="description-input">Job Description:</label>
                        <textarea id="description-input" name="description"
                            placeholder="Put information describing every aspect of the job you are offering... Make sure to include- qualifications required, what the applicants are going to do on the job and any other details as you see fit..." defaultValue={job.description} ></textarea>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="job-type-input">Job Type:</label>
                        <select name="type" id="job-type-input">
                            <option value="FT" selected={ job.type === 'FT' ? 'true' : undefined } >Full Time</option>
                            <option value="PT" selected={ job.type === 'PT' ? 'true' : undefined } >Part Time</option>
                        </select>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="job-status-input">Job status:</label>
                        <select name="status" id="job-status-input">
                            <option value="PH" selected={ job.status === 'PH' ? 'true' : undefined } >Passive Hiring (not urgent)</option>
                            <option value="AH" selected={ job.status === 'AH' ? 'true' : undefined } >Active Hiring (urgent)</option>
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

export default isBusinessProfile(JobUpdate);
