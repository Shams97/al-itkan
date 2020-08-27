import React from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Family from './family info';
import {  Link } from "react-router-dom";



export default function PersonalDetails() {
  return (
    <form action="POST">      
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl"> Personal Details </h3>
        <div className="flex  flex-col mx-4 mb-4 ">
          <FormInput placeholder="name" name="full_name" type="text" />
          <FormInput placeholder="sur name" name="surname" type="text" />
          <FormInput placeholder="email " name="email_from" type="text" />
          <FormInput placeholder="phone number" name="partner_phone" type="text" />
          <FormInput placeholder="address" name="address" type="text" />
          <FormInput placeholder="hai/region" name="hai" type="text" />
          <FormInput placeholder="section" name="sec" type="text" />
          <FormInput placeholder="street" name="st" type="text" />
          <FormInput placeholder="house" name="house" type="text" />
          <textarea
            placeholder="nearest point of reference "
            name="nearest"
            type="text"
            className="pb-4 border-b-2 border-black-400 focus:border-blue-500  outline-none p-2"
          />
          <FormInput placeholder="birth date " name="birthdate" type="date" />
          <FormInput
            placeholder="place of birth"
            name="place_of_birth"
            type="text"
          />
          <label className="p-4"> gender </label>
          <div className="flex flex-row jusitfy-between mx-auto">
            <label className="text-gray-600"> male </label>{" "}
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 text-gray-300"
              value="male"
              name="male"
            />
            <label className="text-gray-600"> female </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 "
              value="female"
              name="female"
            />
          </div>
          <FormInput placeholder="height" name="height" type="text" />
          <FormInput placeholder="weight" name="weight" type="text" />
          <FormInput placeholder="citizenship" name="citizenship" type="text" />
          <FormInput placeholder="religion" name="religion" type="text" />
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
        <div className="mt-10">
 <Link to="/family"><Button value="Next"/></Link>     
</div>
      </div>

      <div className="mb-4"/>
    </form>
  );
}
