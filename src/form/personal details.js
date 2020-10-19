import { FormInput, Button, R_link } from "../App";
import { Link } from "react-router-dom";
import Family from "./family info";
import Health from "./health";
import Language from "./lang";
import React, { useEffect, useContext } from "react";
import Radio from "./radio";
import Selector from "./selection";
import { Context } from "../store";

export default function PersonalDetails() {
  const [state, setState] = useContext(Context);


  
  useEffect(() => {
    if (!state["data"]["job_id"]) {
      let url = new URL(document.URL);
      let job_id = Number( url.searchParams.get("job_id") )
      state["data"]["job_id"] = job_id;
    }

    state["data"]["filling_time"] = new Date();
    setState(state);
    console.log("start ", state["data"]);
  }, []);

  const _onFocus = (e) => {
    e.target.type = "date";
  };

  return (
    <div className="  lg:w-3/4 md:w-3/4 rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 sm:w-full">
      <h3 className="my-8 text-2xl "> Personal Details </h3>
      <div className="lg:flex md:flex sm:block lg:flex-row md:flex-row sm:flex-col justify-between mx-auto ">
        <div className="flex flex-col  mx-8 mb-4 lg:w-1/2 md:w-1/2 sm:w-full">
          <FormInput placeholder="full name" name="name" type="text" />
          <FormInput placeholder="sur name (اللقب)" name="surname" type="text" />
          <FormInput placeholder="الاسم الرباعي" name="arabic_name" type="text" />
          <FormInput placeholder="email" name="email_from" type="text" />
          <FormInput placeholder="skype ID " name="skype_id" type="text" />
          <FormInput
            placeholder="phone number"
            name="partner_phone"
            type="text"
          />
          <FormInput placeholder="address" name="address" type="text" />
          <FormInput placeholder="hai/region" name="hai" type="text" />
          <FormInput placeholder="section" name="sec" type="text" />
          <FormInput placeholder="street" name="st" type="text" />
          <FormInput placeholder="house" name="house" type="text" />
          <FormInput
            textarea={true}
            placeholder="nearest point of reference "
            name="nearest"
            type="text"
            className="pb-4 border-b-2 border-black-400 focus:border-blue-500  outline-none p-2"
          />
        </div>
        <div className="flex flex-col mx-8 mb-4 lg:w-1/2 md:w-1/2 sm:max-w-xl">
          <FormInput placeholder="birth date" type="text" name="birthdate" onFocus={_onFocus}/>
          <FormInput
            placeholder="place of birth"
            name="place_of_birth"
            type="text"
          />
          <label className="p-4"> gender </label>
          <Radio name="gender" ops={["male", "female"]} mx="mx-auto" />
          <FormInput placeholder="height" name="height" type="number" />
          <FormInput placeholder="weight" name="weight" type="number" />
          <FormInput placeholder="citizenship" name="citizenship" type="text" />
          <FormInput placeholder="religion" name="religion" type="text" />

          <label className="p-4">Social Status</label>
          <Selector
            name="social_status"
            classes="p-2"
            ops={[
              "Single",
              "Engaged",
              "Married",
              "Sperated",
              "Widowed",
              "Divorced",
            ]}
          />
        </div>
        <div className="mb-4" />
      </div>

      {/*  added more info to the basic page  */}
      <Family />
      <div className="my-10" />
      <Health />
      <div className="my-10" />
      <Language />

      <div className="mt-10">
        <R_link
          fields={[
            "name",
            "surname",
            "email_from",
            "skype_id",
            "partner_phone",
            "address",
            "hai",
            "sec",
            "st",
            "house",
            "nearest",
            "birthdate",
            "place_of_birth",
            "gender",
            "height",
            "weight",
            "citizenship",
            "religion",
            "father_profession",
            "mother_profession",
            "health_status" ,
            "disease",
            "limitaions",
            "limitaions_travel",
            "arabic_name"
          ]}
          route="/education"
          value="Next"
        />
      </div>
      <div className="mb-4" />
    </div>
  );
}
