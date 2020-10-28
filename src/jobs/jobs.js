import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Img from "../asstes/img.jpg";
import NotFound from "../asstes/undraw_Taken.svg";
import { Context } from "../store";
import Expired from "../asstes/expired.svg";
import Landing from '../asstes/jobs.jpg'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const axios = require("axios");

export let job_id;
export let job_state;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ed8936;
`;
export default function Jobs({ vacancy, handleClick }) {
  const [jobState, setjobs] = useState([]);
  const [state, setState] = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: "https://jobsbackend.alitkan.com/api/get",
        method: "GET",
      });
      let result = response.data;
      console.log(typeof result);
      result.map((item) => {
        jobState.push(item);
      });
      setjobs((res) => [...res]);

      if (response) setLoading(false);
      // jobState.map(item => state['job_state'].push(item.state) )
      //console.log("jobs state ==", state['job_state'], jobState );
    }
    setState(state);

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
      <div className="flex flex-row md:flex-wrap sm:flex-wrap justify-center mx-auto mt-16 px-4 ">
      <div className="container ">
       <img src={Landing} width="100%" height="100%" className="mt-2 opacity-75" style={{backgroundColor:'rgba(0,0,0,0.5)', zIndex:'-1'}}/>
       <div className="transform  lg:-translate-y-64 sm:-translate-y-64 md:-translate-y-48 lg:absolute my-8">
       <p className="lg:text-3xl sm:text-lg md:text-lg xl:text-white lg:text-white sm:text-black md:text-white text-left ml-8">
          Apply now and join our great team    
        </p>
        <p className="text-base xl:text-white lg:text-white text-left ml-8 sm:text-black md:text-white ">
          {" "}
          or you already have an application ?
        
        <button className=" lg:mx-4  md:mx-4 sm:mx-auto hover:bg-transparent focus:bg-transparent  bg-orange-600 hover:text-orange-700 active:text-orange-700 focus:text-orange-700 text-white py-2 px-4 border hover:border-orange-700  border-transparent rounded transition ease-linear duration-500 ">
          <Link to="/check"> check</Link>
        </button>
        </p>
     </div>
      </div>
     </div>
    
      <div className="max-w-full flex flex-row flex-wrap  justify-center ">
        {loading ? (
          <div className="my-56">
            <ClipLoader
              css={override}
              size={100}
              color={"#123abc"}
              loading={loading}
            />
            <p className="flex justify-center  mx-auto">
              Jobs still loading ...{" "}
            </p>
          </div>
        ) : jobState.length === 0 ? (
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
                className="rounded overflow-hidden bg-white shadow-lg  mx-4 lg:mt-10 md:mt-8 sm:mt-4 md:w-1/4 lg:w-1/4 sm:1/2 "
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
                  <h4 className="text-left text-lg font-sans"> {item.city} </h4>
                  <p className="text-left mb-4 font-sans ">
                    Opening date
                    <span className="mx-2 font-sans text-red-600 text-xs">
                      {item.opening_date}
                    </span>
                  </p>
                  {item.description ? (
                    <div className="h-32 w-full">
                      <p className="text-sm text-left font-sans  overflow-auto h-32 mb-8 ">
                        {" "}
                        {item.description}
                      </p>
                    </div>
                  ) : null}

                  <div className="flex flex-row justify-left my-8">
                    <Link to={`/jobs/description?job_id=${item.id}`}>
                      <button
                        className="px-4 py-1 border border-orange-600 bg-transparent text-orange-600 hover:bg-orange-700 active:bg-orange-700  rounded hover:text-white active:text-white mb-2  transition ease-linear duration-500  "
                        value={item.id}
                        name={item.name}
                        onClick={handleClick}
                      >
                        Apply
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mb-4" />
              </div>
            ) : (
              <div
                className="rounded overflow-hidden bg-gray-300 shadow-lg  mx-4 lg:mt-10 md:mt-8 sm:mt-4  md:w-1/4 lg:w-1/4 sm:1/2"
                key={index}
              >
                <img
                  src={Expired}
                  className="object-contain  h-48 w-full bg-gray-100 "
                />
                <div className="pt-10 px-4">
                  <h3 className="text-2xl font-medium my-2 flex-no-wrap">
                    {" "}
                    {item.name}{" "}
                  </h3>
                  <p className="text-xl text-red-500 ">
                    Unfortunately, this job isn't available right now
                  </p>
                  <p className="text-xs mb-8">
                    please keep following us for more updates{" "}
                  </p>
                  <Link to={`/jobs/description?job_id=${item.id}`}>
                    <button
                      className="px-4 py-1 mt-8  mb-8 border border-orange-600 bg-transparent text-orange-600 hover:bg-orange-700 active:bg-orange-700  rounded hover:text-white active:text-white mb-2  transition ease-linear duration-500  "
                      value={item.id}
                      name={item.name}
                      onClick={handleClick}
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
