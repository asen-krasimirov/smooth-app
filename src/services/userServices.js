// const HOST = 'https://smooth-app-api.herokuapp.com';
const HOST = 'http://127.0.0.1:8000';

const pathMap = {
    'auth': HOST + '/auth',
    'profile': HOST + '/auth/profile-details',
};

const addTokenToUrl = (url) => url + '/?AUTH_TOKEN=' + sessionStorage.getItem('AUTH_TOKEN');

export const authenticateSession = (response) => {
    // sessionStorage.setItem('user_id', response.user.id);
    // sessionStorage.setItem('user_is_business', response.user.is_business);
    // sessionStorage.setItem('AUTH_TOKEN', response.token);
};

export const register = (body) => {
    let url = pathMap['auth'] + '/register/';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json());
};

export const login = (body) => {
    let url = pathMap['auth'] + '/login/';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json());
};

export const getProfileDetails = (profile_id) => {
    let url = pathMap['profile'] + '/' + profile_id;

    return fetch(url)
        .then(response => response.json());
};

export const updateProfileDetails = (profile_id, body) => {
    let url = pathMap['profile'] + '/' + profile_id;
    url = addTokenToUrl(url);

    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json());
};
