import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

import * as jobServices from '../../../services/jobServices';

import ModalDialog from '../../Common/ModalDialog/ModalDialog';

function JobApply({
    id,
    showApplyModal,
    showUnapplyModal,

    setShowApplyModal,
    setShowUnapplyModal
}) {
    const navigation = useNavigate();
    const { isProfileComplete } = useAuthContext();

    const onJobApply = () => {
        if (!isProfileComplete) {
            navigation('/profile-not-complete');
            return;
        }

        jobServices.applyToJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
                setShowApplyModal(false);
                navigation('/applied-jobs');
            });
    };

    const onJobUnapply = () => {
        jobServices.unApplyToJob(id)
            .then(data => {
                if (data.hasOwnProperty('message')) {
                    console.log(data.message);
                }
                setShowUnapplyModal(false);
                navigation('/applied-jobs');
            });
    };


    // return isProfileComplete
    //     ? <Component {...props} />
    //     : <Navigate to="/profile-not-complete" />;

    return (
        <>
            {

                showApplyModal
                    ? <ModalDialog message={'Are you sure you want to apply for this job?'} onExecute={onJobApply} onCancel={() => setShowApplyModal(false)} />
                    : null
            }

            {
                showUnapplyModal
                    ? <ModalDialog message={'Are you sure you want to to withdraw your application for this job?'} onExecute={onJobUnapply} onCancel={() => setShowUnapplyModal(false)} />
                    : null
            }
        </>
    );
}

export default JobApply;
