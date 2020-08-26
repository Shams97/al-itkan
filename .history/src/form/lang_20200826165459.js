import React,{useState} from "react";
import { FormInput } from "./main";

export default function Language() {

 const 

  return (
    <div>
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <div className="flex  flex-col m-2 ">
          <h3 className="my-8"> Language an level of proficiency </h3>
           <p className="my-2">Measture your proficiency by selecting level in every language </p>

          <label className="p-4 my-4" htmlFor="arabic"> Arabic</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label className="p-4 my-4" htmlFor="arabic"> Read</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label className="p-4 my-4" htmlFor="arabic"> Write</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label className="p-4 my-4" htmlFor="arabic"> Speak</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label className="p-4 my-4" htmlFor="arabic"> Understand</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label className="p-4 my-4" htmlFor="arabic"> Overall </label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        





        
          <label className="p-4 my-4" htmlFor="arabic"> English</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
        
       <FormInput placeholder="add the name of language you know"/>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
        
        
        </div>
      </div>
    </div>
  );
}
