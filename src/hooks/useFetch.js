import { useState, useEffect } from 'react';


const useFetch = (fetchFunc, defaultValue, funcParams) => {
    const [state, updateState] = useState(defaultValue);

    useEffect(() => {
        try {

        fetchFunc(funcParams)
            .then(data => {
                updateState(data);
            });
        } catch(error) {
            console.log(error);
        }


            // .catch(error => {
            //     console.log(error);
            //     updateState(defaultValue);
            // });

    }, [fetchFunc, funcParams, defaultValue]);

    return { state };
};

export default useFetch;
