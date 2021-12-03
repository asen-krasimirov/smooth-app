const addTokenToUrl = (url) => url + '/?AUTH_TOKEN=' + JSON.parse(localStorage.getItem('authToken'));

export const makeRequest = (url, method='GET', headers={}, body={}, isRequestAuthenticated=false) => {
    if (isRequestAuthenticated) {
        url = addTokenToUrl(url);
    }

    return fetch(url, {
        method,
        headers,
        body: method !== 'GET' ? JSON.stringify(body) : undefined
    })
        .then(response => response.json())
        .catch(error => {
            // console.error(error);
            throw error;
        });
};
