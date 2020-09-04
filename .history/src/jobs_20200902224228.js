import React, { useState, useEffect } from "react";
import { Button } from "./App";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [jobState, setjobs] = useState([]);

  const jobs = [
    {
      "job_name": "manager",
      "job_description": "anytihng ",
      "something_else": "something else"
    },
    {
      "job_name": "developer",
      "job_description": "anytihng blablablablabla ",
      "something_else": "something else"
    },
    {
      "job_name": "developer",
      "job_description": "anytihng blablablablabla ",
      "something_else": "something else"
    }
  ]

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
  async  function fetchData(){ 
    await  fetch("http://localhost:5000/api/get", { headers })
      .then((response) => response.json())
      .then((data) => {
        let result = data 
         console.log("data ===", result )
          result.map((item)=>{
            jobState.push(item)
          })
   
          setjobs(jobState)
         console.log("state =", jobState)
        //  let force = useForceUpdate;
        //  force()
       })
      }
      fetchData();

    }, [jobState]);


    
  
  return (
      // force && 
    <div>
      This is jobs page
      {/* <Button value="Apply now " onClick={force}/> */}
      {jobState.map((item, index)=>{
       return <div key={index}>
         <p> {item.job_name} 
         </p>
         <p> {item.description} 
         </p>
         <p> {item.dead_line} 
         </p>
       </div>
     })}


    </div>
  );
}
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

// const content = ()=>{

// }