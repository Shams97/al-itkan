import React from 'react'
import {FormInput } from './main';

export default function Language () {
    return (
      <div>
           <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
             {/* <div className="flex  flex-col m-4 ">  </div> */}
        <h3 className="my-8"> Language an level of proficiency </h3>
          <label className="p-4">Social Status</label>
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2">
            <option value="single" className="text-gray-600">single</option>
            <option value="enganged">engaged</option>
            <option value="married">married</option>
            <option value="seperated">seperated</option>
            <option value="widowed">widowed</option>
            <option value="divorced">divorced</option>
          </select>
        
      </div>
        </div>
      
    );
    
}
