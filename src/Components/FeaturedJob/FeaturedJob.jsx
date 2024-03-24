import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJob = () => {
   
    const [jobs, setJobs] = useState([])
    // Load show all Data 
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className=" text-center">
            <h1 className="text-4xl">Featured Jobs: 0{jobs.length}</h1>
            <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" lg:grid grid-cols-2 gap-6">

                {
                    jobs.slice(0, dataLength).map(job =><Job  key={job.id} job={job}></Job>)
                }


            </div>
         <div className={dataLength===jobs.length ? 'hidden' : ''}>
         <div className="flex justify-center mb-10 ">
            <button onClick={()=>setDataLength(jobs.length)} className="btn w-[200px] h-16 text-white text-xl mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ">Show All Jobs</button>
            </div>
         </div>
            
        </div>
    );
};

export default FeaturedJob;