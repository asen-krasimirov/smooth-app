import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

function isAuthenticated(Component) {

    const NewComponent = (props) => {

        const { isAuthenticated } = useAuthContext();

        return isAuthenticated
            ? <Component {...props} />
            : <Navigate to="/sign-in" />;
    };

    return NewComponent;
}

export default isAuthenticated;
