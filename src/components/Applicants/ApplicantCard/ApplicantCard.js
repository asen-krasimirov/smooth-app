/* eslint-disable jsx-a11y/alt-text */
import './ApplicantCard.css';

import { Link } from 'react-router-dom';

function ApplicantCard({
    id,
    number,
    firstName,
    lastName,
    iconImage
}) {
    return (
        <article className="applied-applicant-card">
            <div className="applied-applicant-info">
                <h3 className="number-count">{number}</h3>
                <img className="applicant-icon" src={iconImage} />
                <p className="applicant-name">{firstName} {lastName}</p>
            </div>

            <Link className="btn applied-profile-link" to={'/applicant-profile/' + id}>Details</Link>
        </article>
    );
}

export default ApplicantCard;
