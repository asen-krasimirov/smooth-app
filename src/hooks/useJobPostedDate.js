import { useState, useEffect } from 'react';

const useJobPostedDate = (posted_date) => {
    const [timeDifference, setTImeDifference] = useState(0);
    
    useEffect(() => {
        const calcTimeDifference = () => {
            let timeDifference = new Date().getTime() - new Date(posted_date);
            timeDifference = timeDifference / (1000 * 3600 * 24);

            return timeDifference;
        };

        setTImeDifference(calcTimeDifference());
    }, [posted_date]);

    return timeDifference;
};

export default useJobPostedDate;
