import React, { useEffect, useState, useContext } from "react";
import { Button, FormInput } from "./App";
import { Context } from "./store";
import Back from './asstes/arrow-back.svg'
import {Link} from 'react-router-dom'
const axios = require("axios");

export default function Check() {
  const [state, setState] = useContext(Context);
  const [check, setCheck] = useState("");

  let handleCheck = (e) => {
    axios.post("http://localhost:5000/api/check", state).then((res) => {
      console.log("responseee ", res, res.data.msg );
      let msg = res.data.msg
     setCheck(msg)

      
    })
  };

  let handleChange = (e) => {
    let value = e.target.value;
    state["ref"] = value;
  };

  return (
    <>
      <h3 className="text-center mt-10 text-2xl">
        Check your application status
      </h3>
      
      <div className="flex flex-col lg:w-3/4 md:w-3/4 rounded bg-white shadow-lg mx-auto mt-16  px-10 py-4 sm:w-3/4 ">
      <Link to="/">
      <img src={Back} className="w-4 h-4 mt-4"/>
      </Link>
        <input
          placeholder="Write down your reference number"
          name="check"
          onChange={handleChange}
          className="pt-8 border-b-2 border-black-400 focus:border-blue-500  outline-none px-4 font-sans"
        />
        <div className="px-4 my-4">
          <Button onClick={handleCheck} value="Submit status" className="font-sans" />
        </div>
        {/* the string that should be displayed here is returned from the post request */}
       
       {check? <p className="font-sans">Your application status is  <span className="text-red-400">{check}</span></p>:null} 
      </div>
    </>
  );
}
