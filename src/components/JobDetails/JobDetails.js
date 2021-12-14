import './JobDetails.css';

import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useJobPostedDate from '../../hooks/useJobPostedDate';
import { useAuthContext } from '../../contexts/AuthContext';

import * as jobServices from '../../services/jobServices';

import ModalDialog from '../Common/ModalDialog/ModalDialog';
import Applicants from '../Applicants';
import JobApply from './JobApply';

function JobDetails() {
    const { id } = useParams();
    const navigation = useNavigate();
    const { userInfo } = useAuthContext();

    const { state: jobInfo } = useFetch('/jobs/' + id, {}, id);

    const { state: jobAppliedInfo } = useFetch('/jobs/applied/' + id + '/?user_id=' + userInfo.id, {});
    const { state: applicantsData } = useFetch('/jobs/' + id + '/applicants', []);

    const { applicants } = applicantsData;
    const { job, profile } = jobInfo;

    const timeDifference = useJobPostedDate(job ? job.posted_date : 0);

    const [showDelModal, setShowDelModal] = useState(false);

    const hasApplied = jobAppliedInfo.hasOwnProperty('job') && jobAppliedInfo.job.user_id === userInfo.id;

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

    const managementBtns = (
        <div className='management-btns'>
            <Link to={'/update-job-post/' + id} className="btn">Edit Job Details</Link>
            {/* <Link to={ '/delete-job-post/' + id } className="btn">Delete Job</Link> */}
            <button className="btn" onClick={() => setShowDelModal(true)}>Delete Job</button>
        </div>
    );

    const userBtns = hasApplied
        ? <button className="btn" onClick={() => setShowUnapplyModal(true)}>Unapply</button>
        : <button className="btn" onClick={() => setShowApplyModal(true)}>Apply</button>;

    
    console.log(job);

    return (
        <>
            {
                (job && profile)
                    ? <div className={(showDelModal || showApplyModal || showUnapplyModal) ? 'job-details blurred' : 'job-details'}>
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
                                        <span className="head">Posted:</span> {timeDifference < 1 ? 1 : Math.floor(timeDifference)} days ago
                                    </p>
                                    {/* <p className="applicant-count">
                                        <span className="head">Applicants:</span> 3
                                    </p> */}
                                    <p className="job-type">
                                        <span className="head">Job Type:</span> {job.type === 'FT' ? 'Full Time' : 'Part Time'}
                                    </p>
                                    <p className="job-status">
                                        <span className="head">Hiring Status:</span> {job.status === 'AH' ? 'Active Hiring (urgent)' : 'Passive Hiring (not urgent)'}
                                    </p>
                                </div>

                                {
                                    userInfo.id
                                        ? job.owner_id === userInfo.id
                                            ? managementBtns
                                            : !userInfo.is_business ? userBtns : null
                                        : null
                                }

                                {
                                    userInfo.id
                                        ? job.owner_id === userInfo.id
                                            ? applicants && applicants.length > 0
                                                ? <Applicants profiles={applicants} />
                                                : null
                                            : null
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

            {<JobApply
                id={id}
                showApplyModal={showApplyModal}
                showUnapplyModal={showUnapplyModal}

                setShowApplyModal={setShowApplyModal}
                setShowUnapplyModal={setShowUnapplyModal}
            />}

        </>
    );
}

export default JobDetails;
