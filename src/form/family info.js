import React, { useState, useContext } from "react";
import { FormInput, Button } from "../App";
import { Link } from "react-router-dom";

import {Context} from '../store'

export default function FamilyInfo() {
  
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  const [state, setState] = useContext(Context)

  return (
      <div className="mx-auto my-12 lg:p-8 md:p-8 sm:p-4">
          <h3 className="my-8 text-2xl " > Family information </h3>
          <div className="flex  flex-col m-2">
            <FormInput placeholder="Father's profession " name="father_profession" />
            <FormInput placeholder="Mother's professtion" name="mother_profession" />
            <p className="text-center my-2 ">Do you have any sisters or brothers ?</p>
            <FormInput
              placeholder="Brother/sister first name "
              name="first_name"
            />
            <FormInput placeholder="Profession" name="profession" />
          
            {show.map((input, index) => {
              let n = index;
              return (
                <div className="flex flex-col mt-8" key={index}>
                  <FormInput
                    placeholder="Borther/sister first name"
                    name={"first_name_"+n}
                    value={input}
                  />
                  <FormInput
                    placeholder="Profession"
                    name={"profession_"+n}
                    value={input}
                  />
                </div>
              );
            })}

            <div className="flex justify-around flex-row mt-4">
              <span className="  text-red-400">Add more brothers and sisters </span>
          <Operations  onClick={() => {setShow([...show, {}]); setHide(true) }} operation="+" />

            { hide ?
              <Operations  onClick={() => {
                setShow(show.slice(0, show.length - 1))
                let last_index = show.length - 1
                delete state['data']['first_name_' + last_index]
                delete state['data']['profession_' + last_index]
                setState(state)
              }} operation="-" />
              :null}
            </div>
          </div>
      </div>

  );
}

export const Operations = ({onClick , operation}) =>{
  return <button  className="px-4 hover:bg-gray-500 focus:bg-gray-600  hover:text-white focus:text-white rounded text-red-400 text-lg" onClick={onClick} >
  {operation}
  </button>
}