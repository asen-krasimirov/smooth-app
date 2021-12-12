import './JobCard.css';

// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useJobPostedDate from '../../../hooks/useJobPostedDate';

function JobCard({
    jobInfo,
    profileInfo
}) {
    // const [timeDifference, setTimeDifference] = useState(0);
    const timeDifference = useJobPostedDate(jobInfo.posted_date);

    // useEffect(() => {
    //     const calcTimeDifference = () => {
    //         let timeDifference = new Date().getTime() - new Date(jobInfo.posted_date);
    //         timeDifference = timeDifference / (1000 * 3600 * 24);

    //         return timeDifference;
    //     };

    //     setTimeDifference(calcTimeDifference());
    // }, [jobInfo.posted_date]);

    return (
        <article className="job-card">
            {
                timeDifference < 1
                    ? <div className="new-note">
                        <i className="fas fa-fire-alt" ></i>
                    </div>
                    : null
            }

            <div className="image-holder">
                <img className="company-image" src={profileInfo.icon_image ? profileInfo.icon_image : './static/images/default-company-logo.jpg'} alt="company-logo" />
            </div>

            <div className="job-title">
                <h4 className="title">
                    {jobInfo.title}
                </h4>
                <p className="offered-by">
                    offered by <Link to={'/business-profile/' + profileInfo.id}>{profileInfo.name}</Link>
                </p>
            </div>

            <div className="add-info">
                <p className="time-ago">
                    {timeDifference < 1 ? <span>from <span className="green-highlight">Today</span></span> : Math.floor(timeDifference) + ' days ago'}
                </p>
                {/* <p className="applicant-count">
                    3 applicants
                </p> */}
            </div>

            <Link to={'/jobs/' + jobInfo.id} className="btn">Details</Link>

        </article>
    );
}

export default JobCard;
