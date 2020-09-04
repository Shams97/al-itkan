import React, { useState, useEffect } from "react";
import { Button } from "./App";
import { Link } from "react-router-dom";

export default function Jobs(vacancy) {
  const [jobState, setjobs] = useState([]);


  useEffect(() => {
  const headers = { "Content-Type": "application/json" };
  async  function fetchData(){ 
    await fetch("http://localhost:5000/api/get", { headers })
      .then((response) => response.json())
      .then((data) => {
        let result = data 
         console.log("data ===", result )
          
          result.map((item)=>{
            jobState.push(item)
          })
          
         setjobs(res=> [...res, jobState])
    
         console.log("state =", jobState)
       })
      }
      fetchData();

    }, []);


    
  
  return (
      // force && 
    <div>
      This is jobs page

      {jobState.map((item, index)=>{
       return       <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8" key={index}>
       <div className="flex flex-col ">
       <p> {item.job_name} 
         </p>
         <p> {item.description} 
         </p>
         <p> {item.dead_line} 
         </p>

       <Link to="/personal">  <Button value="Apply now" /></Link>
       </div>
       </div>
     })}


    </div>
  );
}
// function useForceUpdate(){
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => ++value); // update the state to force render
// }

// const content = ()=>{

// }