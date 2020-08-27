import React, { useState } from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Family from "./family info";
import { Link } from "react-router-dom";

export default function Employment() {
  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Employment history </h3>
      <p className="mt-4 text-center" name="contact_disclaimer">Can we contact your previous employer(s) ? provide them here </p>
      <div className="flex flex-col m-2">
        <FormInput placeholder="employer name  " name="employer_name" />
        <FormInput placeholder="job title" name="job_title" />
        <div className="flex flex-row px-12">
        <FormInput placeholder="employer province" name="employer_province" />
        <FormInput placeholder="from" name="from" type="date" />
        <FormInput placeholder="to" name="to" type="date"/>
       </div>
        <FormInput placeholder="employer province" name="employer_province" />
        <FormInput placeholder="job title" name="job_title" />
        
        
        <div className="flex justify-around flex-row mt-8">
          <Link to="/training">
            <Button value="Previous" />
          </Link>
          <Link to="/additional">
            <Button value="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Additional_info = () => {
  return (
    <div>
      Additional_info
      <div className="flex justify-around flex-row mt-8">
        <Link to="/sales_skills">
          <Button value="Previous" />
        </Link>
        <Link to="/refrence">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
};

export const Refrence = () => {
  return (
    <div>
      Refrence
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