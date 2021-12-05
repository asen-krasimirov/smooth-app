import { useState, useEffect } from 'react';

// const HOST = 'https://smooth-app-api.herokuapp.com';
const HOST = 'http://127.0.0.1:8000';

const useFetch = (path, defaultValue) => {
    const [state, updateState] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(true);

    let url = HOST + path;

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateState(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });

    }, [url]);

    return { state, isLoading };
};

export default useFetch;
