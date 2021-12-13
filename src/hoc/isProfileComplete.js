import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

import isAuthenticated from './isAuthenticated';

function isProfileComplete(Component) {

    const NewComponent = (props) => {

        const { isProfileComplete } = useAuthContext();

        return isProfileComplete
            ? <Component {...props} />
            : <Navigate to="/profile-not-complete" />;
    };

    return isAuthenticated(NewComponent);
}

export default isProfileComplete;
