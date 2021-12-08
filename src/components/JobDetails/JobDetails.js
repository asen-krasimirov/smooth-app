import './JobDetails.css';

import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useAuthContext } from '../../contexts/AuthContext';

import * as jobServices from '../../services/jobServices';

import ModalDialog from '../Common/ModalDialog/ModalDialog';

function JobDetails() {
    const { id } = useParams();
    const navigation = useNavigate();
    const { userInfo } = useAuthContext();

    const { state: jobInfo } = useFetch('/jobs/' + id, {}, id);
    
    const { state: jobAppliedInfo } = useFetch('/jobs/applied/' + id + '/?user_id=' + userInfo.id, {});

    const { job, profile } = jobInfo;

    const [showDelModal, setShowDelModal] = useState(false);

    const hasApplied = jobAppliedInfo.hasOwnProperty('job') && jobAppliedInfo.job.user_id === userInfo.id;

    // console.log('applied job data:', jobAppliedInfo.job);
    // console.log('user id:', userInfo.id);
    // console.log(hasApplied);

    const [showApplyModal, setShowApplyModal] = useState(false);
    const [showUnapplyModal, setShowUnapplyModal] = useState(false);
    
    const onJobDelete = () => {
        jobServices.deleteJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
                setShowDelModal(false);
                navigation('/business-profile/' + userInfo.id);
            });        
    };

    const onJobApply = () => {
        jobServices.applyToJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
            setShowApplyModal(false);
            navigation('/applied-jobs');
            });
    };

    const onJobUnapply = () => {
        jobServices.unApplyToJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
            setShowUnapplyModal(false);
            navigation('/applied-jobs');
            });
    };

    const managementBtns = (
        <div className='management-btns'>
            <Link to={ '/update-job-post/' + id } className="btn">Edit Job Details</Link>
            {/* <Link to={ '/delete-job-post/' + id } className="btn">Delete Job</Link> */}
            <button className="btn" onClick={() => setShowDelModal(true)}>Delete Job</button>
        </div>
    );
    
    const userBtns = hasApplied
        // ? <Link to={ '/unapply/' + id } className="btn">Unapply</Link>
        // : <Link to={ '/apply/' + id } className="btn">Apply</Link>;
        ? <button className="btn" onClick={() => setShowUnapplyModal(true)}>Unapply</button>
        : <button className="btn" onClick={() => setShowApplyModal(true)}>Apply</button>;

    return (
        <>
            {
                (job && profile)
                    ? <div className={ (showDelModal || showApplyModal || showUnapplyModal) ? 'job-details blurred' : 'job-details' }>
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
                                            offered by <Link to={'/business-profile/' + profile.id}>{profile.name}</Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="main-info">
                                    {job.description}
                                </div>

                                <div className="add-info">
                                    <p className="time-ago">
                                        <span className="head">Posted:</span> 1 day ago
                                    </p>
                                    <p className="applicant-count">
                                        <span className="head">Applicants:</span> 3
                                    </p>
                                    <p className="job-type">
                                        <span className="head">Job Type:</span> { job.type === 'FT' ? 'Full Time' : 'Part Time' }
                                    </p>
                                    <p className="job-status">
                                        <span className="head">Hiring Status:</span> { job.type === 'AH' ? 'Active Hiring (urgent)' : 'Passive Hiring (not urgent)' }
                                    </p>
                                </div>

                                {
                                    userInfo.id
                                        ? job.owner_id === userInfo.id
                                            ? managementBtns
                                            : !userInfo.is_business ? userBtns : null
                                        : null
                                }

                            </article>
                        </section>
                    </div>
                    : null  // <div>Loading...</div>
            }

            {
                showDelModal
                    ? <ModalDialog message={'Are you sure you want to delete this post?'} onExecute={onJobDelete} onCancel={() => setShowDelModal(false)} />
                    : null
            }

            {
                
                showApplyModal 
                    ? <ModalDialog message={'Are you sure you want to apply for this job?'} onExecute={onJobApply} onCancel={() => setShowApplyModal(false)} />
                    : null
            }

            {
                showUnapplyModal
                    ? <ModalDialog message={'Are you sure you want to to withdraw your application for this job?'} onExecute={onJobUnapply} onCancel={() => setShowUnapplyModal(false)} />
                    : null
            }

        </>
    );
}

export default JobDetails;
