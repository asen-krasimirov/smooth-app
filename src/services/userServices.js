const HOST = 'https://smooth-app-api.herokuapp.com';

const pathMap = {
    'auth': HOST + '/auth',
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
