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
        let result = data;
         console.log("result ", result)
         jobState.map((items) => 
         console.log("item ===", items) 
        );
       })
 
    }, []);

  return (
    <div>
      This is jobs page
      <Button value="Apply now " onClick={()=> console.log("response ===", jobState)}/>

      {/* {jobState.map((item,index)=>{
         return <div key={index}>
       <p>{item["job name"]}</p>
       <p>{item["job description"]}</p>
       <p>{item["something else"]}</p>
       
       <Link to="/personal">
          <Button value="Apply now " />
        </Link>
       </div>
       })} */}
    </div>
  );
}
