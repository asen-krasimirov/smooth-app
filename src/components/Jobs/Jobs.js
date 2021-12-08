import './Jobs.css';

import JobCard from './JobCard';

function Jobs({
    jobsInfo,

    curPage,
    maxPage,
    hasPrevious,
    hasNext,
    nextURLChange,
    previousURLChange,
}) {

    const pagination = maxPage > 1
        ? (
            <div className="pagination-btns">
                {
                    hasPrevious
                        ? <button className="btn" onClick={previousURLChange}>Previous</button>
                        : null
                }
                Page {curPage}/{maxPage}
                {
                    hasNext
                        ? <button className="btn" onClick={nextURLChange}>Next</button>
                        : null
                }
            </div>
        )
        : null;

    return (
        <>
            {pagination}
            <section className="generic-section job-holder">

                {
                    jobsInfo.length >= 0
                        ? jobsInfo.map(jobInfo => <JobCard
                            key={jobInfo.job.id}
                            jobInfo={jobInfo.job}
                            profileInfo={jobInfo.profile}
                        />)
                        : null
                }

            </section>
            {pagination}
        </>
    );
}

export default Jobs;
