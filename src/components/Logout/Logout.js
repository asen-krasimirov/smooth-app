import './Logout.css';

import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import isAuthenticated from '../../hoc/isAuthenticated';

function Logout() {
    const { clearUserInfo } = useAuthContext();

    return (
        <div className="logout">
            <h2 className="logout-title">Are you sure you want to logout?</h2>
            <div className="option-btns">
                <Link to="/sign-in" className='btn' onClick={clearUserInfo}>Yes</Link>
                <Link to="/" className='btn' >No</Link>
            </div>
        </div>
    );
}

export default isAuthenticated(Logout);
