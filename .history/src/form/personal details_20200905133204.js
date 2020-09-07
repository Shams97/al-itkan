import { FormInput, Button } from "../App";
import {  Link } from "react-router-dom";
import Family from './family info';
import Health from './health';
import Language from './lang'
import React from "react";
import Radio from './radio'
import Selector from './selection'


export default function PersonalDetails() {

// {props.vacancy}
  return (
    <form action="POST">
        <div className=" max-w-2xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl font-serif"> Personal Details </h3>
        {/* <div className="flex  flex-col justify-between"> */}
          <div className="flex flex-row  mx-4 mb-4 ">
          <FormInput placeholder="first name" name="full_name" type="text"/>
          {/* <FormInput placeholder=" name" name="name" type="text"  /> */}
          <FormInput placeholder="sur name" name="surname" type="text" />
          <FormInput placeholder="email" name="email_from" type="text" />
          <FormInput placeholder="phone number" name="partner_phone" type="text" />

          <FormInput placeholder="address" name="address" type="text" />
          <FormInput placeholder="hai/region" name="hai" type="text" />
          <FormInput placeholder="section" name="sec" type="text" />
          <FormInput placeholder="street" name="st" type="text" />
          <FormInput placeholder="house" name="house" type="text" />
        </div>
        <div className="flex flex-row  mx-4 mb-4 ">

          <FormInput
            textarea = {true}
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
          <Radio name="gender" ops={['male', 'female']}/>
          <FormInput placeholder="height" name="height" type="number" />
          <FormInput placeholder="weight" name="weight" type="number" />
          <FormInput placeholder="citizenship" name="citizenship" type="text" />
          <FormInput placeholder="religion" name="religion" type="text" />

          <label className="p-4">Social Status</label>
          <Selector name="social_status" classes="p-2" ops={['Single','Engaged', 'Married',
          'Sperated', 'Widowed', 'Divorced']}/>
</div>

              {/*  added more info to the basic page  */}







        {/* </div> */}
        <div className="mt-10">
        <Link to="/education">
          <Button value="Next"/>
        </Link>     
        </div>
        </div>
      <div className="mb-4"/>





    </form>
  );
}
