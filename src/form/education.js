import React, { useState, useContext } from "react";
import { FormInput, Button } from "../App";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import Radio from './radio'
import Selector from './selection'
import {Context} from '../store'
import { Training } from "./skills";

export default function Education() {
  const [state, setState] = useContext(Context)
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" lg:w-3/4 md:w-3/4  rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8  sm:w-full">
      <h3 className="my-8 text-2xl font-serif"> Education </h3>
      <div className="lg:flex md:flex  sm:block  flex-row justify-between mx-auto ">

        <div className="flex flex-col lg:mx-8 md:mx-8 sm:mx-2 mb-4 lg:w-1/2 md:w-1/2 sm:w-full">
          <p className="text-start my-4">Primary</p>
          <FormInput placeholder="name of school" name="primary_name"/>
          <FormInput placeholder="years" name="primary_years" type="number"/>
          <FormInput placeholder="average %" name="primary_avg" type="number"/>
          <p className="text-start my-4">Secondary </p>
          <FormInput placeholder="name of school" name="secondary_name"/>
          <FormInput placeholder="years" name="secondary_years" type="number"/>
          <FormInput placeholder="average %" name="secondary_avg" type="number"/>
        </div>

        <div className="flex flex-col  lg:mx-8 md:mx-8 sm:mx-2 mb-4 lg:w-1/2 md:w-1/2 sm:w-full ">

          <p className="text-start my-4">Intermediate</p>
          <FormInput placeholder="name of school" name="Intermediate_name"/>
          <FormInput placeholder="years" name="Intermediate_years" type="number"/>
          <FormInput placeholder="average %" name="Intermediate_avg" type="number"/>
      

          <p className="text-start my-4">College or institute</p>
              <FormInput placeholder="name of school" name="college_name" />
              <FormInput placeholder="years" name="college_years" type="number"/>
              <FormInput placeholder="average %" name="college_avg" type="number"/>


        {show.map((input, index) => {
          let n = index;
          return (
            <div className="flex flex-col  lg:mx-8 md:mx-8 sm:mx-2 mb-4 mt-8 " key={index}>
              <FormInput placeholder="name of school" name={"other_"+ n +"_name"} />
              <FormInput placeholder="years" name={"other_"+ n +"_years"} type="number"/>
              <FormInput placeholder="average %" name={"other_"+ n +"_avg"} type="number"/>
            </div>
          );
        })}
        </div>
      </div>


        <div className="flex  justify-around flex-row mt-8 ">
        <p className="text-red-400">Add more education</p>

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
                // I put 2 bcause ths show value is before the intitaliting fo setShow()
                setHide(show.length == 1 ? false : true)
                let last_index = show.length - 1
                delete state['data']["other_"+ last_index +"_name"]
                delete state['data']["other_"+ last_index +"_years"]
                delete state['data']["other_"+ last_index +"_avg"]
                setState(state)
              }}
              operation="-"
            />
          ) : null}
      
      </div>


      <div className="flex flex-col my-12  lg:px-20 md:px-20 sm:px-2">
          <FormInput
            placeholder="Heighest academic qualification "
            name="highest_acad"
          />
          <FormInput placeholder="graduation year " name="highest_grad_year" type="number"/>
          <FormInput placeholder="university" name="highest_uni" />
          <FormInput placeholder="country" name="highest_country" />
        </div>

        <Training/>

{/* 
        <div className="flex flex-col my-10">
          <p> How did you refrral to us ? </p>

          <Selector name="referral_source" classes="text-sm text-gray-600"
          ops={['Walk-in', 'Employee', 'FaceBook', 'Linked-In']}/>

          <FormInput placeholder="other" name="other_referral_source" />
        </div>


        <div className="flex flex-col my-10">
          <p> choose your Prefered field of work  </p>
          <div className="flex flex-row  justify-center mt-2">
              <Radio name="preffered_fow" ops={['Technical', 'Sales', 'Administration']}/>
          </div>
          <p className="mt-10"> Prefered Contract Preiod </p>
          <div className="flex flex-row  justify-center mt-2">
            <Radio name="preferred_cp" ops={['3 Years', '5 Years', '10 Years']} />
          </div>
        </div> */}




      <div className="flex justify-around flex-row mt-8">
        <Link to="/personal">
          <Button value="Previous" />
        </Link>
        <Link to="/technical">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
}
