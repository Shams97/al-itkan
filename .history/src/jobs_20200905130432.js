import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img from './asstes/img.jpg';
import Img1 from './asstes/img1.jpg';
import Img2 from './asstes/img2.jpg';

export default function Jobs(vacancy) {
  const [jobState, setjobs] = useState([]);
  const [images , setImages ] =useState([])
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

        setjobs((res) => 
        [...res]
        );
      });

    }
    fetchData();
  }, []);
  let src =[Img, Img1, Img2 ]

  return (
    <div className=" flex flex-row flex flex-wrap  my-auto">
      {jobState.map((item, index) => {
        // src = images
      //  src.map((image)=> image = item )
        return (
          <div
            className="rounded overflow-hidden bg-white shadow-lg  mx-auto mt-12 p-12 "
            key={index}
          >
            {/* <img src={item.image} width="100" height="100" /> */}
            {/* <Image /> */}
            
              <img src={ setImages([...src])} width="100" height="100" />
          

            <h3 className="text-center text-2xl mb-4"> {item.job_name} </h3>
            <p> {item.description}</p>
            <div className="flex flex-row justify-between">
              <Link to="/personal">
                <button className="px-2 bg-blue-300  rounded text-white ">Apply now</button>
              </Link>
              <p className="text-red-600 text-sm"> {item.dead_line}</p>
            </div>
          </div>
        );
      })}

      {/* <div className="mb-4" /> */}
    </div>
  );
}



const Image =()=>{
 let src =[Img, Img1, Img2 ]
  return src.map((item, index)=>{
  return  <img src={item} width="100" height="100" key={index}/>
  })
}
