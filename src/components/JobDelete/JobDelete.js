import './JobDelete.css';

import { useParams, Link } from 'react-router-dom';

import * as jobServices from '../../services/jobServices';

function JobDelete() {
    const { id } = useParams();
    // const { clearUserInfo } = useContext(AuthContext);

    const onJobDelete = () => {
        jobServices.deleteJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
            });
    };

    return (
        <div className="job-delete">
            <h2 className="job-delete-title">Are you sure you want to delete this job?</h2>
            <div className="option-btns">
                <Link to="/jobs/" className='btn' onClick={onJobDelete}>Yes</Link>  {/* redirect to profile page ( with owned jobs) */}
                <Link to={ '/jobs/' + id } className='btn' >No</Link>
            </div>
        </div>
    );
}

export default JobDelete;
