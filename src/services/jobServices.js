/* eslint-disable curly */
import { makeRequest } from './services';

// const HOST = 'https://smooth-app-api.herokuapp.com';
const HOST = 'http://127.0.0.1:8000';

const pathMap = {
    'jobs': HOST + '/jobs',
};

// export const getAll = () => {
//     let url = pathMap['jobs'];

//     return makeRequest(url, 'GET');
// };

// export const getOne = (id) => {
//     let url = pathMap['jobs'] + '/' + id;
//     return makeRequest(url, 'POST');
// };

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