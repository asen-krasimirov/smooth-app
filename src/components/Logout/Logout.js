import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import './Logout.css';

function Logout() {
    const { clearUserInfo } = useContext(AuthContext);

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

export default Logout;
