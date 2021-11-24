function JobCard() {
    return (
        <article className="job-card">
            <div className="image-holder">
                <img className="company-image" src="./static/images/default-company-logo.jpg" alt="company-logo" />
            </div>

            <div className="job-title">
                <h4 className="title">
                    er adipisccommodo ligula eget dolor. Aenean m
                </h4>
                <p className="offered-by">
                    offered by <a href="##">Qnko Inc.</a>
                </p>
            </div>

            <div className="add-info">
                <p className="time-ago">
                    1 day ago
                </p>
                {/* <p className="applicant-count">
                    3 applicants
                </p> */}
            </div>

            <a href="##" className="btn">Details</a>

        </article>
    );
}

export default JobCard;
