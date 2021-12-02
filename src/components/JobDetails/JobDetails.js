// import { useState } from 'react';

import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import AuthContext from '../../contexts/AuthContext';

import * as jobServices from '../../services/jobServices';

import './JobDetails.css';

function JobDetails() {
    const { id } = useParams();
    const { state: jobInfo } = useFetch(jobServices.getOne, {}, id);
    const { userInfo } = useContext(AuthContext);
    console.log(userInfo);
    // console.log(jobInfo);
    const { job, profile } = jobInfo;
    
    const managementBtns = (
        <div className='management-btns'>
            <Link to="#" className="btn">Edit Job Details</Link>
            <Link to="#" className="btn">Delete Job</Link>
        </div>
    );

    const userBtns = (
        <Link to="#" className="btn">Apply</Link>
    );

    return (
        <>
            {
                (job && profile)
                    ? <div className="job-details">
                        <section className="generic-section job-details">
                            <article className="job-card">
                                <div className="job-heading">

                                    <div className="image-holder">
                                        <img className="job-image" src={profile.icon_image} alt="job-logo" />
                                    </div>

                                    <div className="job-title">
                                        <h4 className="title">
                                            {job.title}
                                        </h4>
                                        <p className="offered-by">
                                            offered by <Link to="#">{profile.name}</Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="main-info">
                                    {job.description}
                                </div>

                                <div className="add-info">
                                    <p className="time-ago">
                                        1 day ago
                                    </p>
                                    <p className="applicant-count">
                                        3 applicants
                                    </p>
                                </div>

                                {
                                    userInfo.id
                                        ? job.owner_id === userInfo.id
                                            ? managementBtns
                                            : !userInfo.is_business ? userBtns: null
                                        : null
                                }

                            </article>
                        </section>
                    </div>
                    : null  // <div>Loading...</div>
            }
        </>
    );
}

export default JobDetails;
