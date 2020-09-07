import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Img from "./asstes/img.jpg";
import Img1 from "./asstes/img1.jpg";
import Img2 from "./asstes/img2.jpg";
import { Context } from "./store";
import "./job.css";
const curvedDiv = {};

export default function Jobs(vacancy) {
  const [jobState, setjobs] = useState([]);
  const [state, setState] = useContext(Context);

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    async function fetchData() {
      await fetch("http://localhost:5000/api/get", { headers })
        .then((response) => response.json())
        .then((data) => {
          let result = data;
          console.log("data ===", result);

          result.map((item) => {
            jobState.push(item);
          });
          setjobs((res) => [...res]);
        });
    }
    fetchData();
  }, []);

  function handleClick(e) {
    let job = e.target.name;
    state["data"]["job_name"] = job;
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
              className="rounded overflow-hidden bg-white shadow-lg  mx-auto mt-20 md:w-1/2 lg:w-1/4 sm:1/2  "
              key={index}
            >
              <img src={src[index]} className="object-cover h-50 w-full"/>
              <div className="wave bg-transparent"/>
  

              <div className="py-10 px-4 ">
                <h3 className="text-left text-2xl mx-2 font-sans font-medium">
                  {" "}
                  {item.job_name}{" "}
                </h3>
                <p className="text-base text-left mx-2 font-sans  mb-8">
                  {" "}
                  {item.description}
                </p>
                <div className="flex flex-row justify-between">
                  <Link to={{ pathname: `/personal/job=${item.job_name}` }}>
                    <button
                      className="px-4 py-1 border border-green-600 bg-transparent text-green-600 hover:bg-green-700 active:bg-green-700  rounded hover:text-white active:text-white mb-2 "
                      name={item.job_name}
                      onClick={handleClick}
                    >
                      Apply now
                    </button>
                  </Link>
                  <p className="text-red-600 text-sm font-sans mt-2"> <span className="font-sans text-black">Ends in</span> {item.dead_line}</p>
                </div>
              </div>
            </div>
          );
        })}
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
