import './ProfileNotComplete.css';

import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export function ProfileNotComplete() {
    const { userInfo } = useAuthContext();

    return (
        <div className="profile-not-complete">
            <h2 className="profile-not-complete-title">You should finish your profile to continue!</h2>
            <div className="option-btns">
                <Link to={
                    (userInfo.is_business ? '/business-profile-manage/' : '/applicant-profile-manage/') + userInfo.id
                } className='btn'>Finish Profile</Link>
            </div>
        </div>
    );
}

export default ProfileNotComplete;
