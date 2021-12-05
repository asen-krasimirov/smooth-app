import { useParams, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import { useAuthContext } from '../../contexts/AuthContext';

import './JobDetails.css';

function JobDetails() {
    const { id } = useParams();
    const { state: jobInfo } = useFetch('/jobs/' + id, {}, id);
    const { userInfo } = useAuthContext();
    const { job, profile } = jobInfo;

    const managementBtns = (
        <div className='management-btns'>
            <Link to={ '/update-job-post/' + id } className="btn">Edit Job Details</Link>
            <Link to={ '/delete-job-post/' + id } className="btn">Delete Job</Link>
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
        </>
    );
}

export default JobDetails;
