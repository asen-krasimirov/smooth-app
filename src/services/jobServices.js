/* eslint-disable curly */
import { HOST } from '../utils/vars';
import { makeRequest } from './services';

const pathMap = {
    'jobs': HOST + '/jobs',
    'applied_jobs': HOST + '/jobs/applied',
};

export const mapJobsWithProfiles = (jobsInfo) => {
    const jobs = [];

    if (!jobsInfo.hasOwnProperty('jobs')) return jobs;

    jobsInfo.jobs.forEach(job => {
        const profile = jobsInfo.profiles.find(profile => profile.id === job.owner_id);
        jobs.push({job, profile}); 
    });

    return jobs;
};

export const createJob = (body) => {
    let url = pathMap['jobs'];
    const headers = { 'Content-Type': 'application/json' };

    return makeRequest(url, 'POST', headers, body, true);
};

export const updateJob = (id, body) => {
    let url = pathMap['jobs'] + '/' + id;
    const headers ={ 'Content-Type': 'application/json' };

    return makeRequest(url, 'PUT', headers, body, true);
};

export const deleteJob = (id) => {
    let url = pathMap['jobs'] + '/' + id;

    return makeRequest(url, 'DELETE', {}, {}, true);
};

export const applyToJob = (job_id) => {
    let url = pathMap['applied_jobs'];
    const headers ={ 'Content-Type': 'application/json' };

    return makeRequest(url, 'POST', headers, { job_id }, true);
};

export const unApplyToJob = (job_id) => {
    let url = pathMap['applied_jobs'] + '/' + job_id;

    return makeRequest(url, 'DELETE', {}, {}, true);
};
