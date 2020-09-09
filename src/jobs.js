import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Img from "./asstes/img.jpg";
import Img1 from "./asstes/img1.jpg";
import Img2 from "./asstes/img2.jpg";
import { Context } from "./store";
import "./job.css";
const axios = require("axios");

const curvedDiv = {};

export default function Jobs(vacancy) {
  const [jobState, setjobs] = useState([]);
  const [state, setState] = useContext(Context);

  useEffect(() => {
    const headers = { 'Content-Type': 'application/json','Accept': 'text/plain'  };
  

    async function fetchData(){
      const response = await axios ({
        url: "http://localhost:5000/api/get",
        method: "GET"
      })      
      let result = response.data
      // console.log(result)

      result.map((item) => {
        jobState.push(item);
      });

      setjobs((res) => [...res]);
    }

    fetchData();
  }, []);

  function handleClick(e) {
    let job_id = e.target.value;
    state["data"]["job_id"] = Number(job_id)
    // console.log(job_id)
    setState(state);
  }

  let src = [Img, Img1, Img2];
  return (
    (vacancy = "anything"),
    (
      <div className="container max-w-full flex flex-row flex-wrap  justify-center ">
        {jobState.map((item, index) => {
          return (
            <div
              className="rounded overflow-hidden bg-white shadow-lg  mx-auto mt-20 md:w-1/4 lg:w-1/4 sm:1/2  "
              key={index}
            >
              <img src={src[index]} className="object-cover h-50 w-full"/>
              <div className="wave bg-transparent"/>
  

              <div className="py-10 px-4 ">
                <h3 className="text-left text-2xl mx-2 font-sans font-medium">
                  {" "}
                  {item.name}{" "}
                </h3>
                <p className="text-base text-left mx-2 font-sans  mb-8">
                  {" "}
                  {item.description}
                </p>
                <div className="flex flex-row justify-between">
                  <Link to={{ pathname: `/personal/job=${item.name}` }}>
                    <button
                      className="px-4 py-1 border border-green-600 bg-transparent text-green-600 hover:bg-green-700 active:bg-green-700  rounded hover:text-white active:text-white mb-2 "
                      value={item.id}
                      name={item.name}
                      onClick={handleClick}
                    >
                      Apply now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

{/* 
      <div>{jobState.map((item)=>{
        return <div>{item}</div>
      })}</div> */}
      </div>
    )
  );
}

const Image = () => {
  let src = [Img, Img1, Img2];
  return src.map((item, index) => {
    return <img src={item} width="100" height="100" key={index} />;
  });
};
