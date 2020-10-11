import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Img from "./asstes/img.jpg";
import NotFound from "./asstes/undraw_Taken.svg";
import { Context } from "./store";
import Expired from "./asstes/expired.svg";
import "./job.css";
const axios = require("axios");

export let job_id;

export default function Jobs({ vacancy, handleClick }) {
  const [jobState, setjobs] = useState([]);
  const [state, setState] = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: "https://jobsbackend.alitkan.com/api/get",
        method: "GET",
      });
      let result = response.data;
      // console.log(result)

      result.map((item) => {
        //  let image = item.card_image;
        //  console.log("images ", image)
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

  return (
    <>
      <div className="flex flex-row md:flex-wrap sm:flex-wrap justify-center mx-auto mt-20 px-4 ">
        <p className="text-base px-4 mt-2 mt-2">
          {" "}
          Already have an application ?
        </p>
        <button className="hover:bg-transparent focus:bg-transparent  bg-orange-600 hover:text-orange-700 active:text-orange-700 focus:text-orange-700 text-white py-2 px-4 border hover:border-orange-700  border-transparent rounded mb-4  transition ease-linear duration-500 ">
          <Link to="/check"> check</Link>
        </button>
      </div>
      <div className="max-w-full flex flex-row flex-wrap  justify-center ">
        {jobState.length === 0 ? (
          <div className="lg:p-8 md:p-8 sm:px-0  my-4">
            <div className="p-8 mt-10 text-wrap rounded lg:w-1/2 md:w-1/2 sm:w-full mx-auto">
              <p className="text-center lg:text-2xl md:text-lg sm:text-base ">
                {" "}
                Unfortunately there is no job vacancy available
              </p>
              <p className="text-base lg:text-base md:text-sm sm:text-xs ">
                please make sure that you follow us to know when any job vacancy
                available
              </p>
            </div>
            <img src={NotFound} className="w-1/2 h-1/2 mx-auto " />
          </div>
        ) : (
          jobState.map((item, index) => {
            return item.state != "open" ? (
              <div
                className="rounded overflow-hidden bg-white shadow-lg  mx-4 mt-20 md:w-1/4 lg:w-1/4 sm:1/2 "
                key={index}
              >
                <img
                  src={
                    item.card_image === false
                      ? Img
                      : `data:image/jpg;base64,${item.card_image}`
                  }
                  className="object-cover  h-48 w-full "
                />

                <div className="pt-10 px-4">
                  <h3 className="text-left text-2xl font-sans font-medium">
                    {" "}
                    {item.name}{" "}
                  </h3>
                  <h4 className="text-left text-lg font-sans">
                    {" "}
                    {item.city}{" "}
                  </h4>
                  <p className="text-left mb-4 font-sans ">
                    Opening date
                    <span className="mx-2 font-sans text-red-600 text-xs">
                      {item.opening_date}
                    </span>
                  </p>
  {item.description ? 
   <div className="h-32 w-full"><p className="text-sm text-left font-sans  overflow-auto h-32 mb-8 ">
                    {" "}
                    {item.description}
                  </p></div>:null }
                  
                  <div className="flex flex-row justify-left my-8">
                    <Link to={{ pathname: `/personal/job_id=${item.id}` }}>
                      <button
                        className="px-4 py-1 border border-orange-600 bg-transparent text-orange-600 hover:bg-orange-700 active:bg-orange-700  rounded hover:text-white active:text-white mb-2  transition ease-linear duration-500  "
                        value={item.id}
                        name={item.name}
                        onClick={handleClick}
                       >
                        Apply now
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mb-4" />
              </div>
            ) : (
              <div
                className="rounded overflow-hidden bg-gray-300 shadow-lg  mx-4 mt-20 md:w-1/4 lg:w-1/4 sm:1/2 opacity-75 "
                key={index}
                style={{ zIndex: "-1" }}
              >
                <img
                  src={Expired}
                  className="object-contain  h-48 w-full bg-gray-100 "
                />

                <div className="pt-10 px-4">
                  <h3 className="text-2xl font-medium my-2"> {item.name} </h3>
                  <p className="text-xl text-red-500 ">
                    Unfortunately, this job isn't available right now
                  </p>
                  <p className="text-xs mb-8">
                    please keep following us for more updates{" "}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
