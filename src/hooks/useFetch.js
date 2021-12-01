import { useState, useEffect } from 'react';


const useFetch = (fetchFunc, defaultValue) => {
    const [state, updateState] = useState(defaultValue);

    useEffect(() => {

        fetchFunc()
            .then(data => {
                updateState(data);
            })
            .catch(error => {
                updateState(error);
            });

    }, [fetchFunc]);

    return { state };
};

export default useFetch;
