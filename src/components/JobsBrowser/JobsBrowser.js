import './JobsBrowser.css';
import Jobs from '../Jobs';

import * as jobServices from '../../services/jobServices';

import useFetch from '../../hooks/useFetch';

function JobsBrowser() {
    // const jobs = [{}];
    const { state: jobsInfo } = useFetch(jobServices.getAll, []);

    console.log(jobsInfo);

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

            <Jobs jobs={jobsInfo.jobs} profiles={jobsInfo.profiles}/>
        </div>
    );
}

export default JobsBrowser;
