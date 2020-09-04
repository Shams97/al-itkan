import React,{useState, useEffect} from 'react'

export default function Jobs() {
    [jobState, setjobs] = useState([])


    useEffect(()=>{
        fetch("./jobs.json", {
            method: "GET",
            body: JSON.stringify(state),
            headers: {
              "Content-Type": "application/json",
            },
      
          }).then((response) => {
            //  res = onSubmit
            
            console.log("response =", response);
          })

  },[jobState])

  
  
  
    return (
        <div>
            
            this is jobs page 
        </div>
    )
}
