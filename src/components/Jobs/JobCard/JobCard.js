import { Link } from 'react-router-dom';

function JobCard({
    jobInfo,
    profileInfo
}) {

    // console.log(jobInfo);
    // console.log(profileInfo);

    return (
        <article className="job-card">
            <div className="image-holder">
                <img className="company-image" src={profileInfo.icon_image ? profileInfo.icon_image : './static/images/default-company-logo.jpg'} alt="company-logo" />
            </div>

            <div className="job-title">
                <h4 className="title">
                    {jobInfo.title}
                </h4>
                <p className="offered-by">
                    offered by <a href="##">{profileInfo.name}</a>
                </p>
            </div>

            <div className="add-info">
                <p className="time-ago">
                    1 day ago
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
