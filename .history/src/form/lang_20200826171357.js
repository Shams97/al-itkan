import React,{useState, useEffect} from "react";
import { FormInput } from "./main";

export default function Language() {

 const [show , setShow] =useState([1,2])

  return (
    <div>
      <div className=" max-w-75 rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 ">
          <h3 className="my-8"> Language an level of proficiency </h3>
           <p className="mt-4 mb-2">Measture your proficiency by selecting level in every language </p>

           <div className="flex flex-row">
           <div className="flex flex-col">col 1 </div>
           <div className="flex flex-col">col 2 </div>
           </div>





       <div className="flex flex-row">
          <p className="mb-2 mt-4"  htmlFor="arabic"> Arabic</p>
        <div className="flex flex-col"> 
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
        </div>
</div>




        {/* <div className="flex flex-row">  */}
          <p className="mb-2 mt-4"  htmlFor="arabic"> English</p>
        <div className="flex flex-col">
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
        

          <label className="p-4 my-4" htmlFor="arabic"> Overall</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        </div>
          {/* </div> */}




        <div> 
       <FormInput placeholder="add the name of language you know" className="mb-2 mt-4" name="other"/>
        
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
      

        <label className="p-4 my-4" htmlFor="arabic"> Overall</label>
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
