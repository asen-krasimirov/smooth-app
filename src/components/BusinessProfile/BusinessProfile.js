import './BusinessProfile.css';
import Jobs from '../Jobs';

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import useFetch from '../../hooks/useFetch';

import * as jobServices from '../../services/jobServices';

function BusinessProfile() {
    const { userInfo } = useAuthContext();

    const { profile_id } = useParams();
    const { state: profileData } = useFetch('/auth/profile-details/' + profile_id, {});


    const [url, setUrl] = useState('/jobs/?owner_id=' + profile_id, {});
    const { state: jobsInfo } = useFetch(url, {});

    const [curPage, setCurPage] = useState(1);
    const maxPage = jobsInfo.count ? Math.ceil(jobsInfo.count / 9) : 0;

    const changeURL = (url) => {
        const parsedURL = new URL(url);
        let path = parsedURL.pathname + parsedURL.search + '&?owner_id=' + profile_id;
        let curPage = parsedURL.searchParams.get('page') || 1;

        setCurPage(curPage);
        setUrl(path);
    };

    // const { state: jobsInfo } = useFetch('/jobs/?owner_id=' + profile_id, {});

    const mappedJobsWithProfiles = jobServices.mapJobsWithProfiles(jobsInfo.results ? jobsInfo.results : {});

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${profileData.background_image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    // console.log(mappedJobsWithProfiles);
    return (

        <div className="business-profile">
            <section className="generic-section business-profile">
                <article className="business-card">
                    <div className="business-heading" style={backgroundImageStyle}>

                        <div className="image-holder">
                            <img className="company-image" src={profileData.icon_image} alt="company-logo" />
                        </div>

                        <div className="business-name">
                            <h4 className="name">
                                {profileData.name}
                            </h4>

                            <h6 className="sub-name">
                                {profileData.sub_name}
                            </h6>

                        </div>

                        {
                            String(userInfo.id) === profile_id
                                ? <div className="managment-btns">
                                    <Link to={'/business-profile-manage/' + profile_id} className="btn edit-btn">
                                        <i className="far fa-edit"></i>
                                        Edit Profile
                                    </Link>
                                </div>
                                : null
                        }

                    </div>

                    <div className="main-info">
                        {profileData.about_info}
                    </div>

                    <div className="contact-info">
                        You can visit the company's official website <a href={profileData.business_website}>here</a>. Contact Number: <span className="number">+356876071006</span> Email: <span className="email">qnko_group_v_tqh@gmail.com</span>
                    </div>

                    {
                        mappedJobsWithProfiles.length > 0
                            ? <>
                                <h2>Posted Offers</h2>

                                <Jobs
                                    jobsInfo={mappedJobsWithProfiles}

                                    curPage={curPage}
                                    maxPage={maxPage}
                                    hasPrevious={Boolean(jobsInfo.previous)}
                                    hasNext={Boolean(jobsInfo.next)}
                                    previousURLChange={() => changeURL(jobsInfo.previous ? jobsInfo.previous : () => { })}
                                    nextURLChange={jobsInfo.next ? () => changeURL(jobsInfo.next) : () => { }}
                                />
                            </>
                            : null
                    }
                </article>
            </section>
        </div>
    );
}

export default BusinessProfile;
