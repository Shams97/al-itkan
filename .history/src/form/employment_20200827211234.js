import React, { useState } from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Family from "./family info";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import {SelectField} from './lang';


export default function Employment() {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Employment history </h3>
      <p className="mt-4 text-center" name="contact_disclaimer">
        Can we contact your previous employer(s) ? provide them here{" "}
      </p>
      <div className="flex flex-col m-2">
        <FormInput placeholder="employer name  " name="employer_name" />
        <FormInput placeholder="job title" name="job_title" />
        <FormInput placeholder="employer province" name="employer_province" />

        {/* EMPLOYEMENT DATE */}
        <span className="text-center mt-4">Date of employment </span>
        <div className="flex flex-row  my-2">
          <span className="text-sm mx-4 mt-5">from</span>
          <FormInput placeholder="from" name="from_date" type="date" />
          <span className="text-sm mx-4 mt-5">to</span>
          <FormInput
            placeholder="to"
            name="to_date"
            type="date"
            className="placeholder:none"
          />
        </div>

        {/*SALARY */}
        <span className="text-center mt-4">salary </span>
        <div className="flex flex-row  my-2">
          <span className="text-sm mx-4 mt-5">start</span>
          <FormInput name="starting_slry" />
          <span className="text-sm mx-4 mt-5">end</span>
          <FormInput name="ending_slry" />
        </div>

        <FormInput placeholder="supervisor" name="supervisor" />
        <FormInput placeholder="supervisor phone No." name="super_phone" />

        <textarea
          placeholder="reason of leaving "
          name="reason_for_leaving"
          type="text"
          className="pb-4 border-b-2 border-black-400 focus:border-blue-500  outline-none p-2"
        />
      </div>

      <p>Want to provide more than one employer ? </p>
      {show.map((input, index, m) => {
        let n = index;
        return (
          <div className="flex flex-col my-10" key={index}>
            <FormInput
              placeholder={"employer name" + n}
              name={"employer_name_" + n}
            />
            <FormInput placeholder="job title" name={"job_title_" + n} />
            <FormInput
              placeholder="employer province"
              name={"employer_province_" + n}
            />

            {/* EMPLOYEMENT DATE */}
            <span className="text-center mt-4">Date of employment </span>
            <div className="flex flex-row  my-2">
              <span className="text-sm mx-4 mt-5">from</span>
              <FormInput
                placeholder="from"
                name={"from_date_" + n}
                type="date"
              />
              <span className="text-sm mx-4 mt-5">to</span>
              <FormInput
                placeholder="to"
                name={"to_date_" + n}
                type="date"
                className="placeholder:none"
              />
            </div>

            {/*SALARY */}
            <span className="text-center mt-4">salary </span>

            <div className="flex flex-row  my-2">
              <span className="text-sm mx-4 mt-5">start</span>
              <FormInput name={"starting_slry_" + n} />
              <span className="text-sm mx-4 mt-5">end</span>
              <FormInput name={"ending_slry_" + n} />
            </div>

            <FormInput placeholder="supervisor" name="supervisor" />
            <FormInput
              placeholder="supervisor phone No."
              name={"super_phone_" + n}
            />

            <textarea
              placeholder={"reason of leaving " + n}
              name={"reason_for_leaving_" + n}
              type="text"
              className="pb-4 border-b-2 border-black-400 focus:border-blue-500  outline-none p-2"
            />
          </div>
        );
      })}

      <div className="flex  justify-around flex-row mt-4 ">
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

      <div className="flex justify-around flex-row mt-8">
        <Link to="/training">
          <Button value="Previous" />
        </Link>
        <Link to="/additional">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
}

export const Additional_info = () => {
  return (
    <div className="form">
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl"> Additional information </h3>

        <div className="">
          <Options
            htmlFor="union_member"
            label_value="Are you a member of the Iraqi engineers union?"
          />
          <FormInput placeholder="from" name="from_date" type="date" />
          <Options
            htmlFor="driver_license"
            label_value="Do you have a valid drivers license?"
          />
          <span className="text-sm mx-4 mt-5">if yes since when ?</span>
          <FormInput name="driver_license_date" type="date" />
          <FormInput
            placeholder="What is your means of transport?(Personal Car, Public, etc."
            name="means_of_transport"
          />

          <Options
            label_value="Are you good in keeping appointments?"
            htmlFor="good_appoint"
          />
          <Options label_value="Do you smoke ?" htmlFor="smoking" />
          <Options
            label_value="Can you handle long work hours?"
            htmlFor="long_hours"
          />
          <div className="flex flex-row"> 
          <span className="text-sm mx-4 mt-5">if yes since when ?</span>
          <FormInput name="start_date" type="date" />
          </div>

          <Options
            label_value="do you plan to complete studies, currently or in the future?"
            htmlFor="planning_to_study"
          />
          <Options
            label_value="Are you currently employed?"
            htmlFor="presently_employed"
          />
          <Options
            label_value="Can we contact your past employers?"
            htmlFor="contact_employer"
          />


          {/* Additional skills  */}
          <div className="bg-gray">
          <p className="text-center">Add more additional skills</p>
<SelectField forValue="team_work" language="Team work capability"/>
<SelectField forValue="pressure" language="Working under pressure"/>
<SelectField forValue="travel" language="Long distances traveling"/>
</div>

          <div className="flex justify-around flex-row mt-8">
            <Link to="/sales_skills">
              <Button value="Previous" />
            </Link>
            <Link to="/refrence">
              <Button value="Next" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Refrence = () => {
  return (
    <div>
      Refrence And Additional file needed
      <div className="flex justify-around flex-row mt-8">
        <Link to="/sales_skills">
          <Button value="Previous" />
        </Link>
        <Link to="/submited">
          <Button value="submit" />
        </Link>
      </div>
    </div>
  );
};

const Options = ({ htmlFor, label_value }) => {
  return (
    <div className="mt-2">
      <label className="p-4" htmlFor={htmlFor}>
        {label_value}
      </label>
      <div className="flex flex-row justify-center my-4">
        <label className="text-gray-600"> yes </label>{" "}
        <input
          type="radio"
          className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 text-gray-300"
          value="yes"
          name="yes"
        />
        <label className="text-gray-600"> no </label>
        <input
          type="radio"
          className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
          value="no"
          name="no"
        />
      </div>
    </div>
  );
};
export const Submited = () => {
  return (
    <div>
      <p>
        Thankyou for your patiente, Your application has been submitted
        susseccfully{" "}
      </p>
    </div>
  );
};

// const styles = {
//   ::-webkit-input-placeholder { /* Chrome/Opera/Safari */

//     color: white;

//   }

//   ::-moz-placeholder { /* Firefox 19+ */

//     color: white;

//   }

//   :-ms-input-placeholder { /* IE 10+ */

//     color: white;

//   }

//   :-moz-placeholder { /* Firefox 18- */

//     color: white;

//   }
// }
