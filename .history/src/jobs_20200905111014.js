import React, { useState, useEffect } from "react";
import { Button } from "./App";
import { Link } from "react-router-dom";

export default function Jobs(vacancy) {
  const [jobState, setjobs] = useState([]);

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    // async  function fetchData(){
    fetch("http://localhost:5000/api/get", { headers })
      .then((response) => response.json())
      .then((data) => {
        let result = data;
        console.log("data ===", result);

        result.map((item) => {
          jobState.push(item);
          
        });

        setjobs((res) => 
        [...res, jobState]
        );
        console.log("state =", jobState, jobState.length - 1);
      });

    // fetchData();
  }, []);

  return (
    <div className=" flex flex-row">
      {jobState.map((item, index) => {
        return (
          <div
            className="rounded overflow-hidden bg-white shadow-lg mx-auto my-auto mt-10 px-12"
            key={index}
          >
            <h3 className="text-center text-2xl mb-4"> {item.job_name} </h3>
            <img src={item.image} width="100" height="100" />
            <p> {item.description}</p>
            <div className="flex flex-row justify-between">
              <Link to="/personal">
                <Button value="Apply now" />
              </Link>
              <p className="text-red text-sm"> {item.dead_line}</p>
            </div>
          </div>
        );
      })}

      {/* <div className="mb-4" /> */}
    </div>
  );
}
// function useForceUpdate(){
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => ++value); // update the state to force render
// }

// const content = ()=>{

// }
