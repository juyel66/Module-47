import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../Utility/localstorage";


const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoreJobApplication();
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied)
            // console.log( jobs, storedJobIds, jobApplied)
        }
    }, [])
    return (
        <div>
            <h1 className="text-3xl">Jobs i applied: {appliedJobs.length}</h1>
            {/* dropdown */}
            <div>
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onside</a></li>
                    </ul>
                </details>
            </div>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}>
                        <span className="text-3xl text-blue-600">{job.job_title} {job.company_name} {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;