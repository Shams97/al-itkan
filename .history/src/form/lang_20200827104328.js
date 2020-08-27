import React,{useState} from "react";
import { Button,FormInput } from "../App";
import Health from "./health";
import { Link } from "react-router-dom";

export default function Language() {

 const [show , setShow] =useState([])
 const [hide, setHide] = useState(false);

  return (
    <div>
      <div className=" w-3/4	rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 ">
          <h2 className="my-8 text-2xl"> Language an level of proficiency </h2>
           <p className="mt-4 mb-2">Measture your proficiency by selecting level in every language </p>

           <div className="flex flex-row justify-center">
          <SelectField forValue="arabic" language="Arabic"/>
          <SelectField forValue="english" language="English"/>
      
           </div>
           <div className="flex flex-col mx-4">
           {show.map((input, index) => {
            let n = index;
            return (
              <div className="flex flex-col mt-8 px-8 justify-center"> 
              <FormInput placeholder="add the name of language you know" className="my-8" name="other"/>
               
               <label className="mt-4" htmlFor="arabic"> Read</label>
               <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none text-sm text-gray-600 px-8">
                 <option value="excellent">excellent</option>
                 <option value="very good">very good </option>
                 <option value="good">good </option>
                 <option value="average">average</option>
                 <option value="below average">below average</option>
               </select>
             
               <label className="mt-4" htmlFor="arabic"> Write</label>
               <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  text-sm text-gray-600 px-8">
                 <option value="excellent">excellent</option>
                 <option value="very good">very good </option>
                 <option value="good">good </option>
                 <option value="average">average</option>
                 <option value="below average">below average</option>
               </select>
             
               <label className="mt-4" htmlFor="arabic"> Speak</label>
               <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none text-sm text-gray-600 px-8">
                 <option value="excellent">excellent</option>
                 <option value="very good">very good </option>
                 <option value="good">good </option>
                 <option value="average">average</option>
                 <option value="below average">below average</option>
               </select>
             
               <label className="mt-4" htmlFor="arabic"> Understand</label>
               <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none text-sm text-gray-600 px-8">
                 <option value="excellent">excellent</option>
                 <option value="very good">very good </option>
                 <option value="good">good </option>
                 <option value="average">average</option>
                 <option value="below average">below average</option>
               </select>
             
       
               <label className="mt-4" htmlFor="arabic"> Overall</label>
               <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  text-sm text-gray-600 px-8">
                 <option value="excellent">excellent</option>
                 <option value="very good">very good </option>
                 <option value="good">good </option>
                 <option value="average">average</option>
                 <option value="below average">below average</option>
               </select>
             
       </div> 
           ) } )}
        </div>
     
          <div className="flex  justify-around flex-row mt-4">
           <p className="text-sm">Add more language</p> <button
              onClick={() => {
                setShow([...show, {}]); setHide(true) }}
             className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded"
           >
              +
            </button>
          { hide ?<button onClick={(index) => setShow(show.slice(-1, 1))} className="px-4  hover:bg-gray-500 focus:bg-gray-600 rounded">
              -
            </button>:null }  
          </div>
      
        </div>
     
    
        <div className="flex  justify-around flex-row">
        <Link to="/health">
          <Button value="Previous" />
        </Link>
        <Link to="/education">
          <Button value="Next" />
        </Link>
      </div>
      
    </div>
  );
}



const SelectField = ({language,forValue})=>{
  return  <div className="flex flex-col mx-4">
  <p className="mb-8  mt-4 text-xl"  htmlFor={forValue}> {language}</p>
  <label htmlFor="arabic" className="mt-4">Read</label>
  <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none text-sm text-gray-600 px-8">
    <option value="excellent"  >excellent</option>
    <option value="very good" >very good </option>
    <option value="good" >good </option>
    <option value="average" >average</option>
    <option value="below average">below average</option>
  </select>

  <label htmlFor="arabic" className="mt-4"> Write</label>
  <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  text-sm text-gray-600 px-8">
    <option value="excellent">excellent</option>
    <option value="very good">very good </option>
    <option value="good">good </option>
    <option value="average">average</option>
    <option value="below average">below average</option>
  </select>

  <label htmlFor="arabic" className="mt-4"> Speak</label>
  <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  text-sm text-gray-600 px-8">
    <option value="excellent" >excellent</option>
    <option value="very good">very good </option>
    <option value="good">good </option>
    <option value="average">average</option>
    <option value="below average">below average</option>
  </select>

  <label htmlFor="arabic" className="mt-4"> Understand</label>
  <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  text-sm text-gray-600 px-8">
    <option value="excellent">excellent</option>
    <option value="very good">very good </option>
    <option value="good">good </option>
    <option value="average">average</option>
    <option value="below average">below average</option>
  </select>

  <label htmlFor="arabic" className="mt-4" > Overall </label>
  <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none text-sm text-gray-600 px-8">
    <option value="excellent">excellent</option>
    <option value="very good">very good </option>
    <option value="good">good </option>
    <option value="average">average</option>
    <option value="below average">below average</option>
  </select>
  </div>
}