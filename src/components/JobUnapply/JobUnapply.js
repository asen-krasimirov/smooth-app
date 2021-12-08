import './JobUnapply.css';

import { useParams, Link } from 'react-router-dom';

import * as jobServices from '../../services/jobServices';

function JobUnapply() {
    const { id } = useParams();

    const onJobUnapply = () => {
        jobServices.unApplyToJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
            });
    };

    return (
        <div className="job-unapply">
            <h2 className="job-unapply-title">Are you sure you want to to withdraw your application for this job?</h2>
            
            <div className="option-btns">
                <Link to={ '/jobs/' + id } className='btn' onClick={onJobUnapply}>Yes</Link>
                <Link to={ '/jobs/' + id } className='btn'>No</Link>
            </div>
        </div>
    );
}

export default JobUnapply;
