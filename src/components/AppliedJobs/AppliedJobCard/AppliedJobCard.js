import './AppliedJobCard.css';

import { Link } from 'react-router-dom';

function AppliedJobCard({
    id,
    job_id,
    number,
    title,
}) {
    return (
        <article className="applied-job">
            <div className="applied-job-info">
                <h3 className="number-count">{number}</h3>
                <p className="applied-job-title">{title}</p>
            </div>

            <Link className="btn applied-details-link" to={'/jobs/' + job_id}>Details</Link>
        </article>
    );
}

export default AppliedJobCard;
