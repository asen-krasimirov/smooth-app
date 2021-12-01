// const HOST = 'https://smooth-app-api.herokuapp.com';
const HOST = 'http://127.0.0.1:8000';

const pathMap = {
    'jobs': HOST + '/jobs',
};

export const getAll = () => {
    let url = pathMap['jobs'];

    return fetch(url)
        .then(response => {
            // console.log(response);
            return response.json();
        });
};
