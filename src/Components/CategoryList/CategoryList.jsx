// import { useEffect, useState } from "react";
// import Category from "../Category/Category";


const CategoryList = () => {
    // const [A, setA] = useState([]);
    // useEffect(()=>{
    //     fetch('categories.json')
    //     .them(res => res.json)
    //     .then(data => setA(data))
    // },[])
    return (
        <div>
            <h1 className="text-5xl font-bold mt-6 text-center ">Job Category List</h1>
            <p className="text-xl text-center
            ">Explore thousands of job opportunities with all the information you need. Its your future</p>

            {/* <div>
                {
                    A.map(category=><Category key={category.id} category={category}></Category> )
                }

            </div> */}
            
        </div>

    );
};

export default CategoryList;