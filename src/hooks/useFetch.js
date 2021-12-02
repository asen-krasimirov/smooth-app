import { useState, useEffect } from 'react';


const useFetch = (fetchFunc, defaultValue, funcParams) => {
    const [state, updateState] = useState(defaultValue);

    useEffect(() => {

        fetchFunc(funcParams)
            .then(data => {
                updateState(data);
            })
            .catch(error => {
                updateState(error);
            });

    }, [fetchFunc, funcParams]);

    return { state };
};

export default useFetch;
