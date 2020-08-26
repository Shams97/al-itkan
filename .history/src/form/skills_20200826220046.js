export import React,{useState} from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Family from './family info';
import {  Link } from "react-router-dom";

export default function Skills() {
    const [show, setShow] = useState([]);
    const [hide, setHide] = useState(false);

  return(
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8">ADMINSTRATION SKILLS</h3>
      <div className="flex  flex-col m-2">
        <FormInput placeholder="Business Correspondence" name="buisness_corr" />
        <FormInput placeholder="Effective Communication" name="email" />
        <FormInput placeholder="Effective Communication" name="email" />
        <FormInput placeholder="Profession" name="profession" />

        {show.map((input, index) => {
          let n = index;
          return (
            <div className="flex flex-col mt-8" key={index}>
              <FormInput
                placeholder="Borther/sister first name"
                name={"first_name_" + n++}
              />
              <FormInput
                placeholder="Profession"
                name={"profession_" + n++}
              />
            </div>
          );
        })}

        <div className="flex  justify-around flex-row mt-4 ">
          <button
            onClick={() => {
              setShow([...show, {}]); setHide(true) }}
          className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded"
        >
            +
          </button>

        { hide ?
          <button onClick={() => setShow(show.slice(0, show.length - 1) )} className="px-4  hover:bg-gray-500 focus:bg-gray-600 rounded"> - </button>:null}
        </div>
      </div>
    </div>
  )
}