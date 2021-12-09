/* eslint-disable curly */
import './JobsBrowser.css';
import Jobs from '../Jobs';

import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import * as jobServices from '../../services/jobServices';

const initialUrl = '/jobs/';

function JobsBrowser() {
    const [url, setUrl] = useState(initialUrl);
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

    const onJobSearch = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const body = Object.fromEntries(formData);

        const { job_title } = validateJobSearchData(body);

        const path = initialUrl + '?job_title=' + job_title;
        setUrl(path);
    };

    const validateJobSearchData = (body) => {
        
        return {
            job_title: body.jobTitle
        };
    };

    return (
        <div className="jobs">
            <section className="jobs-heading">
                <h2 className="main-title">Jobs</h2>
                <p className="sub-title">Here you can see all available jobs and the details for them!</p>
                <form className="search-form" onSubmit={onJobSearch} >
                    <input name="jobTitle" placeholder="Job Title" />
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
