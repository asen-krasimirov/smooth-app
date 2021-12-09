import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

import isAuthenticated from './isAuthenticated';

function isApplicantProfile(Component) {

    const NewComponent = (props) => {

        const { userInfo } = useAuthContext();

        return !userInfo.is_business
            ? <Component {...props} />
            : <Navigate to="/jobs" />;
    };

    return isAuthenticated(NewComponent);
}

export default isApplicantProfile;
