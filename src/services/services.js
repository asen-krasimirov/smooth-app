export const makeRequest = (url, method='GET', headers={}, body={}) => {
    return fetch(url, {
        method,
        headers,
        body
    })
        .then(response => response.json())
        .catch(error => {
            console.error(error);
            throw error;
        });
};
