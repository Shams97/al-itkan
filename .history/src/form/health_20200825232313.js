import React from "react";
import { FormInput } from "./main";

export default function Health({ formData, navigation }) {
  // const { phone, email } = formData;

  // const { previous, next } = navigation;

  return (
    <div className="form">
      <form action="POST">
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3> Health and limitation </h3>
        <div className="flex  flex-col mx-4 mb-4 ">
        <div className="bg-gray-300 mt-2">
          <label className="p-4"> Your health status ? </label>
          <div className="flex flex-row jusitfy-between mx-auto">
            <label className="text-gray-600"> excellent </label>{" "}
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 text-gray-300"
              value="excellent"
              name="excellent"
            />
            <label className="text-gray-600"> good </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 "
              value="good"
              name="good"
            />
            <label className="text-gray-600"> good </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 "
              value="good"
              name="good"
            />
            <label className="text-gray-600"> good </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 "
              value="good"
              name="good"
            />
            <label className="text-gray-600"> good </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 "
              value="good"
              name="good"
            />
          </div>
        </div>

        <div className="bg-gray-300 mt-2">
          <label className="p-4"> Your health status ? </label>
          <div className="flex flex-row jusitfy-between mx-auto">
            <label className="text-gray-600"> yes </label>{" "}
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 text-gray-300"
              value="yes"
              name="yes"
            />
            <label className="text-gray-600"> no </label>
            <input
              type="radio"
              className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 "
              value="no"
              name="no"
            />
          </div>
        </div>
    
    
    </div>
    </div>
      </form>
      <div>
        {/* <button onClick={previous}>Previous</button> */}
        {/* <button onClick={next}>Next</button> */}
      </div>
    </div>
  );
}
