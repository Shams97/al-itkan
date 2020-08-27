import React,{useState} from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Family from './family info';
import {  Link } from "react-router-dom";

export default function Employment() {
  return (
    <div>
      employment
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


 export const Submited =()=>{
return <div>
    <p>Thankyou for your patiente, Your application has been submitted susseccfully </p>
</div>
  }