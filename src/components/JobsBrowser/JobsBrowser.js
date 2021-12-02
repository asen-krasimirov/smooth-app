/* eslint-disable curly */
import './JobsBrowser.css';
import Jobs from '../Jobs';

import * as jobServices from '../../services/jobServices';

import useFetch from '../../hooks/useFetch';

function JobsBrowser() {
    const { state: jobsInfo } = useFetch(jobServices.getAll, {});

    const mappedJobsWithProfiles = () => {
        if (!jobsInfo.hasOwnProperty('jobs')) return [];
        
        const jobs = [];

        jobsInfo.jobs.forEach(job => {
            const profile = jobsInfo.profiles.find(profile => profile.id === job.owner_id);
            jobs.push({job, profile}); 
        });

        return jobs;
    };

    return (
        <div className="jobs">
            <section className="jobs-heading">
                <h2 className="main-title">Jobs</h2>
                <p className="sub-title">Here you can see all available jobs and see the details for them!</p>
                <form className="search-form">
                    <input type="text" placeholder="Job Title" />
                    <button className="btn">Search</button>
                </form>
            </section>

            <Jobs jobsInfo={mappedJobsWithProfiles()}/>
        </div>
    );
}

export default JobsBrowser;
