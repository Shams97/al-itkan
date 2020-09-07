import React from "react";
import {Button} from '../App';
import {Link } from 'react-router-dom'
import Radio from './radio'


export default function Health() {
 

  return (
      <div className=" mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl font-serif" > Health and limitation </h3>
        <div className="flex  flex-col mx-4 mb-4 ">
        <div className="mt-2">
          <label className="p-4 font-serif" htmlFor="helath_status"> Your health status ? </label>
          <Radio name="health_status" ops={['Excellent', 'Good', 'Average',
          'Below average', 'Poor', 'Very Poor']} />
        </div>

        <div className="mt-2">
          <label className="p-4 font-serif" htmlFor="disease">Have you suffered or are you suffering from any terminal illness or chronic disease? </label>
          <div className="flex flex-row  justify-center my-4" >
            <Radio name="disease" ops={['Yes', 'No']} />
          </div>
        </div>
  
        <div className="mt-2">
          <label className="p-4 font-serif" htmlFor="limitation">Are there any limitations on your ability to perform in your prospective field of work? </label>
          <div className="flex flex-row  justify-center my-4" >
            <Radio name="limitaions" ops={['Yes', 'No']} />
          </div>
        </div>

        <div className="mt-2">
          <label className="p-4 font-serif" htmlFor="travel_limitation"> Are there any limitations on your ability to engage in all types of travel? Inside or outside Iraq </label>
          <div className="flex flex-row  justify-center my-4">
            <Radio name="limitaions_travel" ops={['Yes', 'No']} />
          </div>
        </div>


{/* 
        <div className="flex  justify-around flex-row mt-10">
      <Link to="/family">
        <Button value="Previous" />
        </Link>
        <Link to="/language">
          <Button value="Next" />
        </Link>
      </div> */}

    </div>  
      <div className="mb-4"/>

    </div>
  );
}
