import './Applicants.css';

import ApplicantCard from './ApplicantCard/ApplicantCard';

function Applicants({
    profiles
}) {
    return (
        <section className="applied-applicants-holder">
            <h3 className="applied-applicants-heading">Applicants</h3>

            {profiles.map((profile, index) => <ApplicantCard
                key={profile.id}
                id={profile.id}
                number={index + 1}
                firstName={profile.first_name}
                lastName={profile.last_name}
                iconImage={profile.icon_image}
            />)}
        </section>
    );
}

export default Applicants;
