import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Img from './asstes/img.jpg';
import Img1 from './asstes/img1.jpg';
import Img2 from './asstes/img2.jpg';
import {Context} from './store';

export default function Jobs(vacancy) {
  const [jobState, setjobs] = useState([]);
  const [state, setState ] = useContext(Context);

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
   async  function fetchData(){
    await fetch("http://localhost:5000/api/get", { headers })
      .then((response) => response.json())
      .then((data) => {
        let result = data;
        console.log("data ===", result);

        result.map((item) => {
          jobState.push(item);
        });
        setjobs((res) =>  [...res]);
      });

    }
    fetchData();
  }, []);


  function handleClick(e){
    let job = e.target.name  
    state['data']['job_name'] = job
    setState(state)
  }


  let src =[Img, Img1, Img2 ]

  return (
    vacancy="anything",
    <div className=" flex flex-row flex-wrap  my-auto" >
      {jobState.map((item, index) => {
        return (
           <div
            className="rounded overflow-hidden bg-white shadow-lg  mx-auto mt-20 w-1/4"
            key={index}
            >
              {/* <idv > */}
            <img src={src[index]} className="object-cover h-48 w-full"/>    
            <div className="bg-black w-3"/>    
            <h3 className="text-center text-2xl mb-4"> {item.job_name} </h3>
            <p> {item.description}</p>
            <div className="flex flex-row justify-between">
              <Link to={{pathname:`/personal/job=${item.job_name}`}}>
                <button className="px-2 bg-blue-300 rounded text-white " name={item.job_name}
                onClick={ handleClick}>Apply now</button>
              </Link>
              <p className="text-red-600 text-sm"> {item.dead_line}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}



const Image =()=>{
  let src =[Img, Img1, Img2 ]
  return src.map((item, index)=>{
  return  <img src={item} width="100" height="100" key={index}/>
  })
}

