import React, { useState } from "react";
import { FormInput } from "./main";
import { Link } from "react-router-dom";
import { Button } from "./main";
import { Operations } from "./family info";
export default function Education() {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Education </h3>
      <div className="flex flex-col my-4">
        <div className="flex flex-col my-4">
          <p className="text-center">Primary</p>
          <FormInput placeholder="name of school" name="primary_name"/>
          <FormInput placeholder="years" name="primary_years"/>
          <FormInput placeholder="average %" name="primary_avg" />
        </div>

        <div className="flex flex-col my-4">
          <p className="text-center">Intermediate</p>
          <FormInput placeholder="name of school" name="Intermediate_name"/>
          <FormInput placeholder="years" name="Intermediate_years"/>
          <FormInput placeholder="average %" name="Intermediate_avg"/>
        </div>

        <div className="flex flex-col my-4">
          <p className="text-center">Secondary </p>
          <FormInput placeholder="name of school" name="secondary_name"/>
          <FormInput placeholder="years" name="secondary_years"/>
          <FormInput placeholder="average %" name="secondary_avg"/>
        </div>



        <div className="flex flex-col my-4">
          <p className="text-center">College or institute</p>
          <FormInput placeholder="name of school" name="college_name"/>
          <FormInput placeholder="years" name="college_years"/>
          <FormInput placeholder="average %" name="college_avg"/>
        </div>

        {show.map((input, index) => {
          let n = index;
          return (
            <div className="flex flex-col my-4">
              <FormInput placeholder="name of school" name={"other_"+ n++ +"_name"}/>
              <FormInput placeholder="years" name={"other_"+n++ +"years"}/>
              <FormInput placeholder="average %" name={"other_"+n++ +"avg"}/>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row mt-4">
        <p className="text-sm">Add more education</p>

        <div className="flex  justify-around flex-row mt-8 ">
          <Operations
            onClick={() => {
              setShow([...show, {}]);
              setHide(true);
            }}
            operation="+"
          />
          {hide ? (
            <Operations
              onClick={() => {
                setShow(show.slice(0, show.length - 1));
              }}
              operation="-"
            />
          ) : null}





        </div>

      
      </div>


      {/* Hieghtest degree and referel and preferd field  */}

      <div className="flex flex-col  my-10">
          <FormInput
            placeholder="hieghest acamic qalification "
            name="highest_acad"
          />
          <FormInput placeholder="graduation year " name="highest_grad_year" />
          <FormInput placeholder="university" name="highest_uni" />
          <FormInput placeholder="country" name="highest_country" />
        </div>


        <div className="flex flex-col  my-10">
          <p> How did you refrral to us ? </p>
          {/* <label htmlFor="referral_source" className="mt-4">Referral resources </label> */}
          <select className="border-b-2 border-black-400 focus:border-blue-500  outline-none text-sm text-gray-600 ">
            <option value="walk-in">Walk in</option>
            <option value="employee"> Employee</option>
            <option value="facebook"> Facebook</option>
            <option value="linked-in">Linked-in</option>
          </select>
          <FormInput placeholder="other" name="other_referral_source" />
        </div>


        <div className="flex flex-col my-10">
          <p> choose your Prefered field of work  </p>
          {/* <label htmlFor="referral_source" className="mt-4">Referral resources </label> */}
            <label className="text-gray-600"> excellent </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-2  text-gray-300"
              value="excellent"
              name="excellent"
            />
            <label className="text-gray-600"> good </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-2 "
              value="good"
              name="good"
            />
            <label className="text-gray-600"> average </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-2 "
              value="average"
              name="average"
            />

          <FormInput placeholder="other" name="other_referral_source" />
        </div>


      <div className="flex justify-around flex-row mt-8">
        <Link to="/language">
          <Button value="Previous" />
        </Link>
        <Link to="/technical">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
}
