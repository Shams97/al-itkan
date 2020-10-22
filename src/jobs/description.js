import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store";
import Down from "../asstes/arrow-down.svg";
import {Link} from 'react-router-dom';
const axios = require("axios");

export default function Description() {
  const [desc,setDesc] = useState({})

    useEffect(()=>{
      async function fetchData() {
      let url = new URL(document.URL);
      let job_id = Number( url.searchParams.get("job_id"))
       await axios.get(`https://jobsbackend.alitkan.com/api/description?job_id=${job_id}`)
       .then(res =>  {
          let data = {...res.data};
          Object.assign(desc, data.job)
          setDesc({...desc})
          console.log("state =",desc)
     })
       }
  fetchData()
  console.log("desc out side ", desc)
    },[])



  return (
    <div>
      { desc.name && desc.state!='open' ? 

               <div className="py-10">
                <h2 className=" text-left text-2xl ml-12 mt-24">{desc.name} </h2>
                <Basic_info department={desc.department_id ? desc.department_id[1] : "on intreview"}
                  emp_type={desc.type_of_position ? desc.type_of_position : "on intreview"}
                  location={desc.city} />

                <div className="rounded overflow-hidden bg-white shadow-lg mx-10">
                { desc.description ?
                  <Drop_down
                  title="Summray"
                  content={desc.description}
                  />
                : null}
                
                { desc.behavioral_competencies ?
                  <Drop_down
                  title="Behavioral Competencies"
                  content={desc.behavioral_competencies}
                  />
                : null}

                { desc.technical_knowledge ?
                  <Drop_down
                  title="Technical knowledge"
                  content={desc.technical_knowledge}
                  />
                : null}

                { desc.education_language_requirements ?
                  <Drop_down
                  title="Education and language requirements"
                  content={desc.education_language_requirements}
                  />
                : null}

                <Link to={`/personal?job_id=${desc.id}`}>
                      <button
                        className="px-4 py-2 mt-8  mb-8  border border-orange-600 bg-transparent text-orange-600 hover:bg-orange-700 active:bg-orange-700  rounded hover:text-white active:text-white mb-2  transition ease-linear duration-500"
                      >
                        Apply 
                      </button>
                    </Link>
                </div>
            </div> 
  
        
      :desc.state=="open" ?  <div className="bg-gray-300 w-full h-full py-10 "> 
 <h2 className=" text-left text-2xl ml-12 mt-24">{desc.name} </h2>
                <Basic_info department={desc.department_id ? desc.department_id[1] : "on intreview"}
                  emp_type={desc.type_of_position ? desc.type_of_position : "on intreview"}
                  location={desc.city} />

                <div className="rounded overflow-hidden bg-white shadow-lg mx-10">
                { desc.description ?
                  <Drop_down
                  title="Summray"
                  content={desc.description}
                  />
                : null}
                
                { desc.behavioral_competencies ?
                  <Drop_down
                  title="Behavioral Competencies"
                  content={desc.behavioral_competencies}
                  />
                : null}

                { desc.technical_knowledge ?
                  <Drop_down
                  title="Technical knowledge"
                  content={desc.technical_knowledge}
                  />
                : null}

                { desc.education_language_requirements ?
                  <Drop_down
                  title="Education and language requirements"
                  content={desc.education_language_requirements}
                  />
                : null}
                <h3 className="text-center text-xl mt-10"> This job is not available right now </h3>
                <Link to="/">
                      <button
                        className="px-4 py-2 mt-8  mb-8 border border-blue-400 bg-transparent text-blue-400 hover:bg-blue-500 active:bg-blue-500  rounded hover:text-white active:text-white mb-2  transition ease-linear duration-500"
                      >
                        Back 
                      </button>
                    </Link>
                </div>
    
                </div>

      :<p className="mt-32 mx-auto  rounded bg-white shadow-lg"> There is no such job</p>}
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
        <p className="text-orange-600 text-sm" > Department </p>
        <p className="text-black text-lg"> {department}</p>
      </div>
      <div className="flex flex-col justify-between ">
        <p className="text-orange-600 text-sm mx-4" >
          {" "}
          Employment type{" "}
        </p>
        <p className="text-black text-lg"> {emp_type}</p>
      </div>
      <div className="flex flex-col justify-between ">
        <p className="text-orange-600  text-sm mx-4" > Location </p>
        <p className="text-black text-lg"> {location}</p>
      </div>
    </div>
  );
};

export const Closed_desc= () => {
  return <div className="bg-gray-300 w-full h-full py-10 "> 
       <h2 className=" text-left text-2xl ml-12 mt-24"> Senior Accountant </h2>
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
        </div>
        </div>;
};
