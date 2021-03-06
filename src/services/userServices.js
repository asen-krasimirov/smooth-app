import { HOST } from '../utils/vars';
import { makeRequest } from './services';

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

// export const getProfileDetails = (profile_id) => {
//     let url = pathMap['profile'] + '/' + profile_id;

//     return makeRequest(url, 'GET');
// };

export const isProfileComplete = (profile_id) => {
    let url = pathMap['profile'] + '/' + profile_id + '/is_complete';

    return makeRequest(url, 'GET');
};

export const updateProfileDetails = (profile_id, body) => {
    let url = pathMap['profile'] + '/' + profile_id;
    const headers = { 'Content-Type': 'application/json' };

    return makeRequest(url, 'PUT', headers, body, true);
};
