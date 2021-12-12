import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function ScrollReseter({
    children
}) {
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return children;
}

export default ScrollReseter;
