import { useState, useEffect } from 'react';

// const HOST = 'https://smooth-app-api.herokuapp.com';
const HOST = 'http://127.0.0.1:8000';

const useFetch = (path, defaultValue) => {
    const [state, updateState] = useState(defaultValue);

    let url = HOST + path;

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateState(data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [url]);

    return { state };
};

export default useFetch;
