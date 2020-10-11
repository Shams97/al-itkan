import React, { useEffect, useContext, useState } from "react";
import { FormInput, Button } from "./App";
import { Context } from "./store";


const axios = require("axios");

export default function Support() {
const [state,setState] = useContext(Context);
useEffect(()=>{
},[])


const handle_Ticket_Submit= async ()=>{
     
    axios.post("http://localhost:5000/api",state).then((res)=>{
        console.log("response", res)
    })

}


  return (
      <div className="lg:w-3/4 md:w-3/4 rounded overflow-hidden bg-white shadow-lg mx-auto mt-24 p-8 sm:w-full">
        <h3 className="mb-8 mt-4 text-2xl "> Support </h3>
        <div className="lg:flex md:flex sm:block lg:flex-row md:flex-row sm:flex-col  justify-between mx-auto ">
          <div className="flex flex-col  mx-8 mb-4 w-full">
            <FormInput
              name="partenr_name"
              type="text"
              placeholder="your name"
            />
            <FormInput
              name="partenr_email"
              type="text"
              placeholder="your email"
            />
            <FormInput name="name" type="text" placeholder="subject" />
            <FormInput
              name="description"
              type="text"
              placeholder="description"
            />
            <FormInput name="Attachment" type="file" />
            <div className="px-4 my-4">
            <Button value="Submit a ticket" onClick={handle_Ticket_Submit}/>
            </div>
          </div>
        </div>
      </div>
  );
}
