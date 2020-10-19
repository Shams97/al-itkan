import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store";
import Down from "../asstes/arrow-down.svg";
import {Link} from 'react-router-dom';
import {job_state} from './jobs';
const axios = require("axios");

export default function Description() {
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
        jobState.push(item);
      });

      setjobs((res) => [...res]);
      console.log(jobState);
    }

    fetchData();
  }, []);

  return (
    <div className="mt-24">
        
               <>
               <h2 className=" text-left text-2xl ml-12 mt-20"> Senior Accountant </h2>
      <Basic_info department="HR" emp_type="Full time" location="Baghdad" />

      <div className=" rounded overflow-hidden bg-white shadow-lg mx-10">
        <Drop_down
          title="Summery"
          content="(overall purpose and objective of this position, why does this position exist?)
         In this role, you will be responsible for allocating task between the team ensure end month, quarter and year closes up
         journals follow up day to day operation assist with future plans and processes help ensure uploading contract documents on
         EDS. System verify accounting records"
        />

        <Drop_down
          title="Behavioral Competencies"
          content="(overall purpose and objective of this position, why does this position exist?)
         In this role, you will be responsible for allocating task between the team ensure end month, quarter and year closes up
         journals follow up day to day operation assist with future plans and processes help ensure uploading contract documents on
         EDS. System verify accounting records"
        />

        <Drop_down
          title="Technical knowledge"
          content="(overall purpose and objective of this position, why does this position exist?)
         In this role, you will be responsible for allocating task between the team ensure end month, quarter and year closes up
         journals follow up day to day operation assist with future plans and processes help ensure uploading contract documents on
         EDS. System verify accounting records"
        />
        <Drop_down
          title="Education and language requirements"
          content="(overall purpose and objective of this position, why does this position exist?)
         In this role, you will be responsible for allocating task between the team ensure end month, quarter and year closes up
         journals follow up day to day operation assist with future plans and processes help ensure uploading contract documents on
         EDS. System verify accounting records"
        />
        <Link to={`/personal?job_id=`}>
                      <button
                        className="px-4 py-1 border border-orange-600 bg-transparent text-orange-600 hover:bg-orange-700 active:bg-orange-700  rounded hover:text-white active:text-white mb-2  transition ease-linear duration-500"
                      >
                        Apply 
                      </button>
                    </Link>
      </div>
</>

    </div>
  );
}

const Drop_down = ({ title, content }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-4">
      <h4
        className="flex justify-between hover:border-transparent text-orange-500  text-left py-4 pl-4 text-xl hover:bg-orange-500  focus:bg-orange-500 hover:bg-orange-500  focus:text-white hover:text-white "
        onClick={() => setShow(!show)}
      >
        {" "}
        {title}
        {/* <img src={Down} style={{backgroundColor:'black'}} className="mr-4"/> */}
      </h4>
      {show ? (
        <div className="bg-gray-200 w-full p-8">
          <p className="text-left"> {content}</p>
        </div>
      ) : null}
    </div>
  );
};

const Basic_info = ({ department, emp_type, location }) => {
  return (
    <div className="flex flex-row mx-12 justify-between my-8">
      <div className="flex flex-col justify-between">
        <p className="text-orange-600 opacity-75 text-sm" style={{zIndex:'-1'}}> Department </p>
        <p className="text-black text-lg"> {department}</p>
      </div>
      <div className="flex flex-col justify-between ">
        <p className="text-orange-600 opacity-75 text-sm mx-4" style={{zIndex:'-1'}}>
          {" "}
          Employment type{" "}
        </p>
        <p className="text-black text-lg"> {emp_type}</p>
      </div>
      <div className="flex flex-col justify-between ">
        <p className="text-orange-600 opacity-75 text-sm mx-4" style={{zIndex:'-1'}}> Location </p>
        <p className="text-black text-lg"> {location}</p>
      </div>
    </div>
  );
};

export const Closed_description = () => {
  return <div className="bg-gray-400 h-34 w-34">closed job</div>;
};
