/* eslint-disable curly */
import { useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        try {
            const value = localStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : defaultValue;

        } catch (err) {
            console.error(err);
            return defaultValue;
        }
    });

    const updateStateAndStorage = (newState) => {
        try {
            localStorage.setItem(key, JSON.stringify(newState));
            setState(newState);
        } catch(err) {
            console.error(err);
        }
    };

    return [
        state,
        updateStateAndStorage
    ];
};

export default useLocalStorage;
