import React,{useState, useEffect} from 'react'
import {Button} from './App';
import {Link} from 'react-router-dom'




export default function Jobs() {
const jobs = [
    {
      "job name": "manager",
      "job description": "anytihng ",
      "something else": "something else"
    },
    {
      "job name": "developer",
      "job description": "anytihng blablablablabla ",
      "something else": "something else"
    },
    {
      "job name": "developer",
      "job description": "anytihng blablablablabla ",
      "something else": "something else"
    }
  ]
  

    useEffect((data)=>{
        // setjobs(data)
      //   fetch("http://localhost:5000/api/get",{
      //   method:"GET",
      //   header:{ 'Content-Type':'application/json'},
      //   //  body:[...jobState,{}]
      
      // }).then((response)=>{
      //     console.log("response",response, jobState)
      //   })

      const [jobState, setjobs] = useState(["something"])

        fetch("http://localhost:5000/api/get", {
      method: "GET",
      body: JSON.stringify(jobState),
      headers: {
        "Content-Type": "application/json",
      },

    }).then((response) => {
      //  res = onSubmit
      console.log("response =", response);
    })
  


  },[])

  
  
  
    return (
       <div >
           This  is jobs page 
       {jobState.map((item,index)=>{
         return <div key={index}>
       <p>{item["job name"]}</p>
       <p>{item["job description"]}</p>
       <p>{item["something else"]}</p>
       
       <Link to="/personal">
          <Button value="Apply now " />
        </Link>
       </div>
       })}
    </div>
    )
}