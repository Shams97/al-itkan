import React, { useState, useEffect } from "react";
import { Button } from "./App";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [jobState, setjobs] = useState([]);

  // const jobs = [
  //   {
  //     "job name": "manager",
  //     "job description": "anytihng ",
  //     "something else": "something else"
  //   },
  //   {
  //     "job name": "developer",
  //     "job description": "anytihng blablablablabla ",
  //     "something else": "something else"
  //   },
  //   {
  //     "job name": "developer",
  //     "job description": "anytihng blablablablabla ",
  //     "something else": "something else"
  //   }
  // ]

  // useEffect(()=>{
  // setjobs(data)
  //   fetch("http://localhost:5000/api/get",{
  //   method:"GET",
  //   header:{ 'Content-Type':'application/json'},
  //   //  body:[...jobState,{}]

  // }).then((response)=>{
  //     console.log("response",response, jobState)
  //   })

  //         fetch("http://localhost:5000/api/get",{

  //         }).then((response) => response.json())
  //         .then(data=>
  //           {
  //             setjobs(data)
  // console.log("data ==",data)
  //           }
  //         );

  //   },[])

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:5000/api/get", { headers })
      .then((response) => response.json())
      .then((data) => {
        let result = data 
         console.log("data ===", result )
          result.map((item)=>{
            jobState.push(item)
          })
   
          setjobs(jobState)
         console.log("state =", jobState)

       })
 
    }, []);

  return (
    <div>
      This is jobs page
      <Button value="Apply now " onClick={()=> console.log("response ===", jobState)}/>

     {jobState.map((item, index)=>{
       return <div key={index}>
         <p>{item}</p>
       </div>
     })}



    </div>
  );
}
