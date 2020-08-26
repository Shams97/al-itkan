import React,{useState, useEffect} from "react";
import { Button,FormInput } from "../App";
import Health from "./health";
import { Link } from "react-router-dom";
export default function Language() {

 const [show , setShow] =useState([])
 const [hide, setHide] = useState(false);

  return (
    <div>
      <div className=" max-w-75 rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 ">
          <h2 className="my-8 "> Language an level of proficiency </h2>
           <p className="mt-4 mb-2">Measture your proficiency by selecting level in every language </p>

           <div className="flex flex-row mx-auto">
           <div className="flex flex-col mx-4">
            <p className="mb-2 mt-4 text-lg	"  htmlFor="arabic"> Arabic</p>
          <label className="p-2" htmlFor="arabic"> Read</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label className="p-2" htmlFor="arabic"> Write</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label htmlFor="arabic"> Speak</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label htmlFor="arabic"> Understand</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
          <label htmlFor="arabic"> Overall </label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  px-4 py-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        
           
           
           </div>


           <div className="flex flex-col mx-4">
           <p className="mb-2 mt-4"  htmlFor="english"> English</p>
          <label htmlFor="english"> Read</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  px-4 py-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        

          <label htmlFor="english"> Write</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none px-4 py-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        

          <label htmlFor="english"> Speak</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none px-4 py-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        

          <label htmlFor="english"> Understand</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  px-4 py-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
        

          <label htmlFor="arabic"> Overall</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none px-4 py-2">
            <option value="excellent">excellent</option>
            <option value="very good">very good </option>
            <option value="good">good </option>
            <option value="average">average</option>
            <option value="below average">below average</option>
          </select>
              </div>
           </div>
           <div className="flex flex-col mx-4">

           {show.map((input, index) => {
            let n = index;
            return (
              <div className="flex flex-col mx-4"> 
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
           ) } )}
        </div>
        </div>
     
        <div className="flex  justify-around flex-row mt-4">
            <button
              onClick={() => {
                setShow([...show, {}]); setHide(true) }}
             className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded"
           >
              +
            </button>
          { hide ?<button onClick={(index) => setShow(show.slice(index, 1))} className="px-4  hover:bg-gray-500 focus:bg-gray-600 rounded">
              -
            </button>:null }  
          </div>
        
      <div className="flex  justify-around flex-row">
        <Link to="/">
          <Button value="Previous" />
        </Link>
        <Link to="/health">
          <Button value="Next" />
        </Link>
      </div>
      
    </div>
  );
}



