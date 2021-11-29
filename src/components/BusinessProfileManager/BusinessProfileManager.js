function BusinessProfileManager() {
    return (
        <div className="business-profile-manage">
            <section className="generic-section business-profile-manage-section">
                <h3>Update Profile Settings</h3>

                <form className="business-profile-manage-form">

                    <div className="input-holder">
                        <label htmlFor="name-input">Company Name:</label>
                        <input id="name-input" name="name" placeholder="Company's name..." />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="sub-name-input">Secondary Company Name:</label>
                        <input id="sub-name-input" name="sub-name" placeholder="Company's secondary name..." />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="about-info-input">About Info:</label>
                        <textarea id="about-info-input" name="about-info"
                            placeholder="Put description of your company, things to expect or any useful information..."></textarea>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="icon-image-input">Icon Image:</label>
                        <input id="icon-image-input" name="icon-image" type="file" />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="background-image-input">Background Image:</label>
                        <input id="background-image-input" name="background-image" type="file" />
                    </div>

                    <div className="input-holder">
                        <label htmlFor="business-blog-input">Company Website:</label>
                        <input id="business-blog-input" type="url" name="business-blog" placeholder="https://example.com"
                            pattern="https://.*" />
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </section>

        </div>
    );
}

export default BusinessProfileManager;
