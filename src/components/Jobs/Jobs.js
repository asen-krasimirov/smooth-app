import './Jobs.css';

import JobCard from './JobCard';

function Jobs({
    jobsInfo
}) {

    return (
        <section className="generic-section job-holder">
            
            {
                jobsInfo.length >= 0
                    ? jobsInfo.map(jobInfo => <JobCard 
                        key={jobInfo.job.id}
                        jobInfo={jobInfo.job}
                        profileInfo={jobInfo.profile}
                    />)
                    : null
            }

        </section>
    );
}

export default Jobs;
