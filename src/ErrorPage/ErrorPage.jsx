import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            Oops!!!
            <Link to="/" className="btn bg-green border-red-600">Go to the home</Link>
            
        </div>
    );
};

export default ErrorPage;