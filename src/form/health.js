import React from "react";
import {Button} from '../App';
import {Link } from 'react-router-dom'
import Radio from './radio'

export default function Health({ formData, navigation }) {
  // const { phone, email } = formData;
  // const { previous, next } = navigation;
  return (
    <div className="form">
      <form action="POST">
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl" > Health and limitation </h3>
        <div className="flex  flex-col mx-4 mb-4 ">
        <div className="mt-2">
          <label className="p-4" htmlFor="helath_status"> Your health status ? </label>
          <Radio name="health_status" ops={['excellent', 'good', 'average',
          'below average', 'poor', 'very poor']} />
        </div>

        <div className="mt-2">
          <label className="p-4" htmlFor="disease">Have you suffered or are you suffering from any terminal illness or chronic disease? </label>
          <div className="flex flex-row  justify-center my-4" >
            <Radio name="suffered_from" ops={['yes', 'no']} />
          </div>
        </div>
  
        <div className="mt-2">
          <label className="p-4" htmlFor="limitation">Are there any limitations on your ability to perform in your prospective field of work? </label>
          <div className="flex flex-row  justify-center my-4" >
            <Radio name="prospective_limitaion" ops={['yes', 'no']} />
          </div>
        </div>

        <div className="mt-2">
          <label className="p-4" htmlFor="travel_limitation"> Are there any limitations on your ability to engage in all types of travel? Inside or outside Iraq </label>
          <div className="flex flex-row  justify-center my-4">
            <Radio name="travel_limitaion" ops={['yes', 'no']} />
          </div>
        </div>


        <div className="flex  justify-around flex-row mt-10">
      <Link to="/family">
        <Button value="Previous" />
        </Link>
        <Link to="/language">
          <Button value="Next" />
        </Link>
      </div>
    </div>

    </div>
      </form>
      <div className="mb-4"/>

    </div>
  );
}
