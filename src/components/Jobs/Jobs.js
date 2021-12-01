import './Jobs.css';

import JobCard from './JobCard';

function Jobs({
    jobsInfo
}) {

    // console.log(jobsInfo);
    return (
        <section className="generic-section job-holder">
            
            {
                jobsInfo.length >= 0
                    ? jobsInfo.map(jobInfo => <JobCard 
                        key={jobInfo.job.id}
                        // title={job.title}
                        // description={job.description}
                        // status={job.status}
                        // type={job.title}
                        // profileInfo={
                        //     // profiles.
                        // }
                        jobInfo={jobInfo.job}
                        profileInfo={jobInfo.profile}
                    />)
                    : null
            }

            {/* <JobCard />
            <JobCard />
            <JobCard /> */}

        </section>
    );
}

export default Jobs;
