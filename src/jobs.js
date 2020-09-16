import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Img from "./asstes/img.jpg";
import Img1 from "./asstes/img1.jpg";
import Img2 from "./asstes/img2.jpg";
import Img4 from "./asstes/img4.jpg";
import Img5 from "./asstes/img5.jpg";
import Img6 from "./asstes/img6.jpg";
import NotFound from "./asstes/undraw_Taken.svg";
import { Context } from "./store";
import "./job.css";
const axios = require("axios");

export let job_id;

export default function Jobs({ vacancy, handleClick }) {
  const [jobState, setjobs] = useState([]);
  const [state, setState] = useContext(Context);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "text/plain",
    };

    async function fetchData() {
      const response = await axios({
        url: "http://localhost:5000/api/get",
        method: "GET",
      });
      let result = response.data;
      result.map((item) => {
        jobState.push(item);
      });

      setjobs((res) => [...res]);
      console.log(jobState);
    }

    fetchData();
  }, []);

  function handleClick(e) {
    job_id = e.target.value;
    state["data"]["job_id"] = Number(job_id);
    setState(state);
    console.log("state == ", state);
  }

  let src = [Img, Img1, Img2, Img4, Img5, Img6];

  return (
    <>
      <div className="flex flex-row justify-center mx-auto mt-10 px-4 ">
        <p className="text-base px-4 mt-2 mt-2">
          {" "}
          Already have an application ?
          
        </p>
        <button className="hover:bg-transparent focus:bg-transparent  bg-blue-500 hover:text-blue-700 active:text-blue-700 focus:text-blue-700 hover:font-semibold text-white py-2 px-4 border hover:border-blue-500  border-transparent rounded mb-4"> 
          <Link to="/check" >
            {" "}
            check
          </Link>
          </button>
      </div>
      <div className="max-w-full flex flex-row flex-wrap  justify-center ">
        {jobState.length === 0 ? (
          <div className="my-4">
            <div className="p-8 mt-10 text-wrap rounded w-1/2 mx-auto">
              <p className="text-center lg:text-2xl md:text-lg sm:text-base ">
                {" "}
                Unfortunately there is no job vacancy available
              </p>
              <p className="text-base lg:text-base md:text-sm sm:text-xs">
                please make sure that you follow us to know when any job vacancy available 
              </p>
            </div>
            <img src={NotFound} className="w-1/2 h-1/2 mx-auto " />
          </div>
        ) : (
          jobState.map((item, index) => {
            return (
              <div
                className="rounded overflow-hidden bg-white shadow-lg  mx-4 mt-20 md:w-1/4 lg:w-1/4 sm:1/2 "
                key={index}
              >
                <img src={src[index]} className="object-cover h-50 w-full" />
                {/* <div className="wave bg-transparent"/> */}

                <div className="pt-10 px-4">
                  <h3 className="text-left text-2xl mx-2 font-sans font-medium">
                    {" "}
                    {item.name}{" "}
                  </h3>
                  <p className="text-left my-4 mx-2 font-sans ">
                    Opening date
                    <span className="mx-2 font-sans text-red-600 text-xs">
                      {item.opening_date}
                    </span>
                  </p>

                  <p className="text-sm text-left font-sans  overflow-auto h-32 mb-8 ">
                    {" "}
                    {item.description}
                  </p>
                  <div className="flex flex-row justify-center">
                    <Link to={{ pathname: `/personal/job_id=${item.id}` }}>
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
                  <div className="mb-4" />
                </div>
                <div className="mb-4" />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
