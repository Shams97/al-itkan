import React, { useState, useContext } from "react";
import { FormInput, Button } from "../App";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import Radio from './radio'
import Selector from './selection'
import {Context} from '../store'

export default function Education() {
  const [state, setState] = useContext(Context)
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
            <div className="flex flex-col my-4">
              <FormInput placeholder="name of school" name="college_name" />
              <FormInput placeholder="years" name="college_years"/>
              <FormInput placeholder="average %" name="college_avg"/>
            </div>

        {show.map((input, index) => {
          let n = index;
          return (
            <div className="flex flex-col my-4">
              <FormInput placeholder="name of school" name={"other_"+ n +"_name"} />
              <FormInput placeholder="years" name={"other_"+ n +"_years"}/>
              <FormInput placeholder="average %" name={"other_"+ n +"_avg"}/>
            </div>
          );
        })}
        </div>
      </div>

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

          <Selector name="referral_source" classes="text-sm text-gray-600"
          ops={['Walk-in', 'Employee', 'FaceBook', 'Linked-In']}/>

          <FormInput placeholder="other" name="other_referral_source" />
        </div>


        <div className="flex flex-col my-10">
          <p> choose your Prefered field of work  </p>
          <div className="flex flex-row  justify-center mt-2">
              <Radio name="preffered_fow" ops={['Technical', 'Sales', 'Administration']}/>
          </div>
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
