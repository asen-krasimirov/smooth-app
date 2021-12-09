import './AppliedJobs.css';

import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useAuthContext } from '../../contexts/AuthContext';

import AppliedJobCard from './AppliedJobCard/AppliedJobCard';

import isApplicantProfile from '../../hoc/isApplicantProfile';

function AppliedJobs() {
    const { userInfo } = useAuthContext();

    const { state: appliedJobsInfo } = useFetch('/jobs/applied/?user_id=' + userInfo.id, {});

    const { jobs, profile } = appliedJobsInfo.hasOwnProperty('jobs') ? appliedJobsInfo : { jobs: [], profile: {} };

    return (
        <div className="applied-jobs">
            <h2 className="applied-jobs-title">Applied Jobs</h2>
            <p className="applied-jobs-sub-title">for <span className="highlighted">{profile.first_name} {profile.last_name}</span></p>
            {/* <p>User Info- {userInfo}</p> */}
            <section className="applied-jobs-holder">
                {
                    jobs.length > 0
                        ? jobs.map((job, number) => <AppliedJobCard
                            key={job.id}
                            id={job.id}
                            job_id={job.job_id}
                            number={number + 1}
                            title={job.title}
                        />)
                        : <p className="no-applied-jobs">
                            You haven't applied to any jobs yet! Do it from the job browser <Link to="/jobs">here</Link>.
                        </p>
                }
            </section>
        </div>
    );
}

export default isApplicantProfile(AppliedJobs);
