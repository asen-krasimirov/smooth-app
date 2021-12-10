import { makeRequest } from './services';

const HOST = 'https://smooth-app-api.herokuapp.com';
// const HOST = 'http://127.0.0.1:8000';

const pathMap = {
    'auth': HOST + '/auth',
    'profile': HOST + '/auth/profile-details',
};

export const register = (body) => {
    let url = pathMap['auth'] + '/register/';
    const headers = { 'Content-Type': 'application/json' };

    return makeRequest(url, 'POST', headers, body);
};

export const login = (body) => {
    let url = pathMap['auth'] + '/login/';
    const headers = { 'Content-Type': 'application/json' };

    return makeRequest(url, 'POST', headers, body);
};

export const updateProfileDetails = (profile_id, body) => {
    let url = pathMap['profile'] + '/' + profile_id;
    const headers = { 'Content-Type': 'application/json' };

    return makeRequest(url, 'PUT', headers, body, true);
};
