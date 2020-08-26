import React,{useState} from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Family from './family info';
import {  Link } from "react-router-dom";


export default function Admin_Skills() {
    const [show, setShow] = useState([]);
    const [hide, setHide] = useState(false);

  return(
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8">ADMINSTRATION SKILLS</h3>
      <div className="flex  flex-col m-2">
        <FormInput placeholder="Business Correspondence" name="buisness_corr" />
        <FormInput placeholder="Effective Communication" name="effective_comm" />
        <FormInput placeholder="Customer Service" name="costumer_serv" />
        <FormInput placeholder="Teamwork" name="teamwork" />
        <FormInput placeholder="Internet and research" name="inter_and_res" />
        <FormInput placeholder="Microsoft Office and Outlook" name="microsoft_office_and_outlook" />
        <FormInput placeholder="Office Machines and Equipment" name="office_machines" />
        <FormInput placeholder="Typing" name="typing" />
        <FormInput placeholder="Time Management and Prioritizing" name="time_managment_and_prioritizing" />
        <FormInput placeholder="Attention to Details" name="attention_to_detials" />
        <FormInput placeholder="Goal-Oriented" name="goal_oriented" />
        <FormInput placeholder="Multi-Tasking" name="multi_tasking" />
        <FormInput placeholder="Follow up" name="follow_up" />
        <FormInput placeholder="Employee Relations" name="employee_relation" />
        <FormInput placeholder="Supervision" name="supervision" />

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