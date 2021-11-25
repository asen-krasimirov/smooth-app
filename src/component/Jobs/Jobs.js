import './Jobs.css';

import JobCard from './JobCard';

function Jobs({
    jobs
}) {
    return (
        <section className="generic-section job-holder">
            
            <JobCard />
            <JobCard />
            <JobCard />

        </section>
    );
}

export default Jobs;
