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
       {jobs.map((name, disc, some)=>{
           return <div>
       <p>{name["job name"]}</p>
       
       <p>{disc["job description"]}</p>
       <p>{some["something else"]}</p>

       </div>
       })}
    </div>
    )
}
