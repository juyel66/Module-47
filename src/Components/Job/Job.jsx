import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {logo,id, job_title,company_name, remote_or_onsite,location, job_type, salary }=job;
    return (
        <div className="mt-10">
            <div className="card card-compact p-10  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{job_title}</h2>
    <p className="text-xl">{company_name}</p>
    <div className="flex gap-3">
      <button className="btn border-blue-700 border-[3px] rounded-xl text-blue-500 text-xl">{remote_or_onsite}</button>
      <button className="btn border-blue-700 border-[3px] rounded-xl text-blue-500 text-xl">{job_type}</button>
    </div>

    <div className="flex gap-8 mt-6">
    
   <div className="flex items-center gap-1">
   <h1 className="lg:text-2xl"><MdOutlineLocationOn></MdOutlineLocationOn></h1>
    <h1 className="lg:text-2xl">{location}</h1>
   </div>

   <div className="flex items-center gap-1">
    <h1 className="lg:text-2xl"><PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold></h1>
    <h1 className="lg:text-2xl">{salary}</h1>
    
   </div>

      

    </div>

    <div className="card-actions justify-start">
     <Link to={`/job/${id}`}>
     <button className="btn text-white text-xl mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ">View Details</button>
     </Link>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default Job;