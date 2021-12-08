import './JobApply.css';

import { useParams, Link } from 'react-router-dom';

import * as jobServices from '../../services/jobServices';

function JobApply() {
    const { id } = useParams();

    const onJobApply = () => {
        jobServices.applyToJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
            });
    };

    return (
        <div className="job-apply">
            <h2 className="job-apply-title">Are you sure you want to apply for this job?</h2>
            <p className="note-message">
                <span className="highlighted">Important Note:</span> Check if your profile is up to date! Make sure it's the way you want to be seen!
            </p>
            <div className="option-btns">
                <Link to={ '/jobs/' + id } className='btn' onClick={onJobApply}>Yes</Link>
                <Link to={ '/jobs/' + id } className='btn'>No</Link>
            </div>
        </div>
    );
}

export default JobApply;
