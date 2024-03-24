import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job =>job.id===idInt);
    console.log(job);
    
    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast('you have applied successfully')
    }
    return (
        <div>
            <h1 className="text-4xl text-red-500">Job details: {job.job_title} </h1>
            <div className="grid gap-4 md:grid-cols-4">
                
                <div className="border md:col-span-3">
                <h1 className="text-7xl text-green-600">details coming here</h1>
                    
                </div>

                <div className="border">
                <h1 className="text-5xl text-red-600">side things</h1>
                <button onClick={handleApplyJob} className="btn mt-9 btn-primary w-full">Apply now </button>
                </div>

            </div>
            <ToastContainer />
            
        </div>
    );
};

export default JobDetails;