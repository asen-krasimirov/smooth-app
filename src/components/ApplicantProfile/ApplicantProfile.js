import './ApplicantProfile.css';

import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

function ApplicantProfile() {
    const { profile_id } = useParams();
    const { state: profileData } = useFetch('/auth/profile-details/' + profile_id, {});

    console.log(profileData);

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${profileData.background_image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    console.log(backgroundImageStyle);

    return (

        <div className="applicant-profile">
            <section className="generic-section applicant-profile">
                <article className="applicant-card">
                    <div className="applicant-heading" style={backgroundImageStyle}>

                        <div className="image-holder">
                            <img className="applicant-image" src={profileData.icon_image}
                                alt="applicant-logo" />
                        </div>

                        <div className="applicant-name">
                            <h4 className="name">
                                {profileData.first_name} {profileData.last_name}
                            </h4>

                            {/* <h6 className="sub-name">
                                I am the best for your best!
                            </h6> */}
                        </div>

                        <div className="managment-btns">
                            <a href="##" className="btn edit-btn">
                                <i className="fas fa-tasks"></i>
                                Manage Applied Jobs
                            </a>
                            <a href="##" className="btn edit-btn">
                                <i className="far fa-edit"></i>
                                Edit Profile
                            </a>
                        </div>
                    </div>

                    <div className="main-info">
                        {profileData.about_info}
                    </div>

                    <div className="contact-info">
                        You can visit the applicants's website <a href={profileData.applicant_blog}>here</a>. Contact Number: <span className="number">+356876071005</span> Email: <span className="email">qnko_v_tqh@gmail.com</span>
                    </div>

                    {
                        profileData.education && profileData.education[0]
                            ? <section className="generic-section education-section">
                                <h3 className="section-heading">Education</h3>
                                <div className="add-info">
                                    <p>A list of all qualifications.</p>
                                    <p className="more-add-info">(The education list is set my the applicants themselves)</p>
                                </div>

                                <ul className="education-list">
                                    {profileData.education.map(data => <li key={data}>{data}</li>)}
                                </ul>

                            </section>
                            : null
                    }

                    {
                        profileData.skills && profileData.skills[0]
                            ? <section className="generic-section skills-section">
                                <h3 className="section-heading">Skills</h3>
                                <div className="add-info">
                                    <p>Skills to note when reviewing this applicant.</p>
                                    <p className="more-add-info">(The skills are set my the applicants themselves)</p>
                                </div>

                                <ul className="skill-list">
                                    {profileData.skills.map(data => <li key={data}>{data}</li>)}
                                </ul>

                            </section>
                            : null
                    }

                </article>
            </section>
        </div>
    );
}

export default ApplicantProfile;
