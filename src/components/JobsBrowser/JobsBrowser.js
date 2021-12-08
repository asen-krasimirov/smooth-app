/* eslint-disable curly */
import './JobsBrowser.css';
import Jobs from '../Jobs';

import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import * as jobServices from '../../services/jobServices';

function JobsBrowser() {
    const [url, setUrl] = useState('/jobs/');
    const { state: jobsInfo } = useFetch(url, {});

    const [curPage, setCurPage] = useState(1);
    const maxPage = jobsInfo.count ? Math.ceil(jobsInfo.count / 9) : 0;

    const mappedJobsWithProfiles = jobServices.mapJobsWithProfiles(jobsInfo.results ? jobsInfo.results : {});

    const changeURL = (url) => {
        const parsedURL = new URL(url);
        let path = parsedURL.pathname + parsedURL.search;
        let curPage = parsedURL.searchParams.get('page') || 1;

        setCurPage(curPage);
        setUrl(path);
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

            <Jobs
                jobsInfo={mappedJobsWithProfiles}

                curPage={curPage}
                maxPage={maxPage}
                hasPrevious={Boolean(jobsInfo.previous)}
                hasNext={Boolean(jobsInfo.next)}
                previousURLChange={() => changeURL(jobsInfo.previous ? jobsInfo.previous : () => { })}
                nextURLChange={jobsInfo.next ? () => changeURL(jobsInfo.next) : () => { }}
            />
        </div>
    );
}

export default JobsBrowser;
