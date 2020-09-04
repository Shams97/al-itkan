import React,{useState, useEffect} from 'react'

export default function Jobs() {
    const [jobState, setjobs] = useState([])
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
  

    useEffect(()=>{
        // fetch("./jobs.json", {
        //     method: "GET",
        //     // body: JSON.stringify(state),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
      
        //   }).then((response) => {
        //     //  res = onSubmit
            
        //     console.log("response =", response);
        //   })



  },[jobState])

  
  
  
    return (
       <div >
           This  is jobs page 
       {jobs.map((item,index)=>{
           return <div key={index}>
       <p>{item["job name"]}</p>
       <p>{item["job description"]}</p>
       <p>{item["something else"]}</p>
   <button className="btn btn-primary">Apply now </button>
       </div>
       })}
    </div>
    )
}
