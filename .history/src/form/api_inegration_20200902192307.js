import React,{useEffect, useState, useContext} from 'react'
import { useForm} from "react-hook-form";
import { FormInput, Button } from "../App";
import {Context} from '../store'

export default function Api_inegration() {
 const [state, setState] = useContext(Context)

  let handleSubmit = (e) => {
    fetch("http://localhost:5000/api", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },

    }).then((response) => {
      //  res = onSubmit
      console.log("response =", response);
    })
  }    

useEffect(()=>{
  fetch("http://localhost:5000/api/get", {
    method: "GET",
    body: JSON.stringify(state),
    headers: {
      "Content-Type": "application/json",
    },

  }).then((response) => {
    //  res = onSubmit
    response.json()
    console.log("response =", response.json() ,state );
  })
}, [state])


  return (
    <div>
      <Button value="submit" onClick={handleSubmit}/>
    </div>
  )
}
