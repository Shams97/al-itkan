import React,{useState} from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Family from './family info';
import {  Link } from "react-router-dom";

export const Technical_skills =() =>{
    return     <form action="POST">
    <div>Techinical_skills
      <div className="flex justify-around flex-row mt-8">
        <Link to="/education">
          <Button value="Previous" />
        </Link>
        <Link to="/admin_skills">
          <Button value="Next" />
        </Link>
      </div>
      <div className="mb-4"/> 
    </div>
    </form>
}




export default function Admin_Skills() {
    const [show, setShow] = useState([]);
    const [hide, setHide] = useState(false);

  return(
    <form action="POST">
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl">Adminstration skills</h3>
      <div className="flex  flex-col m-2">
        <FormInput placeholder="Business Correspondence" name="buisness_corr" />

        <FormInput placeholder="effective ommunication" name="effective_comm" />
        <FormInput placeholder="customer service" name="costumer_serv" />
        <FormInput placeholder="teamwork" name="teamwork" />
        <FormInput placeholder="internet and research" name="inter_and_res" />
        <FormInput placeholder="microsoft office and outlook" name="microsoft_office_and_outlook" />
        <FormInput placeholder="office machines and equipment" name="office_machines" />
        <FormInput placeholder="typing" name="typing" />
        <FormInput placeholder="time management and prioritizing" name="time_managment_and_prioritizing" />
        <FormInput placeholder="attention to details" name="attention_to_detials" />
        <FormInput placeholder="goal-oriented" name="goal_oriented" />
        <FormInput placeholder="multi-tasking" name="multi_tasking" />
        <FormInput placeholder="follow up" name="follow_up" />
        <FormInput placeholder="employee relations" name="employee_relation" />
        <FormInput placeholder="supervision" name="supervision" />
      </div>
      <div className="flex justify-around flex-row mt-8">
        <Link to="/technical">
          <Button value="Previous" />
        </Link>
        <Link to="/sales_skills">
          <Button value="Next" />
        </Link>

      </div>
      
      <div className="mb-4"/> 
    </div>
    </form>

  )
}

export const Sales_Skills =() =>{
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return ( 
    <form action="POST">

    <div className="max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl">Sales Sales</h3>
      <div className="flex  flex-col m-2">
        <FormInput placeholder="relationship building" name="relationship_and_building" />
        <FormInput placeholder="time management" name="time_managment" />
        <FormInput placeholder="research / information gathering" name="research_and_information_gathareing" />
        <FormInput placeholder="medical product knowledge" name="medical_prodcuct_knowledge" />
        <FormInput placeholder="business communication" name="buisness_communication" />
        <FormInput placeholder="client engagement" name="client_engagement" />
        <FormInput placeholder="sales presentations / Demos" name="sales_presenatitinos_and_demos" />
        <FormInput placeholder="contract negotiation" name="contract_negotiotaion" />
        <FormInput placeholder="closing skills" name="closing_skills" />
        <FormInput placeholder="self-motivated / ambitious" name="self_motivted_and_ambitious" />
        <FormInput placeholder="adaptability" name="adaptability" />
        <FormInput placeholder="responsibility" name="responsibility" />
        <FormInput placeholder="goal-oriented" name="goal_oriented" />
        <FormInput placeholder="passionate about selling" name="passionate_about_selling" />
      </div>
      <div className="flex justify-around flex-row mt-8">
        <Link to="/admin_skills">
          <Button value="Previous" />
        </Link>
        <Link to="/training">
          <Button value="Next" />
        </Link>
      </div>
      <div className="mb-4"/>
    </div>
    </form>
  
  )
}


export const Training =()=>{
  return     <form action="POST">  
  <div className=" w-3/4	rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 ">
  <h2 className="my-8 text-2xl"> Language an level of proficiency </h2>
  <div className="flex justify-around flex-row mt-8">
  <Link to="/sales_skills">
    <Button value="Previous" />
  </Link>
  <Link to="/emploment">
    <Button value="Next" />
  </Link>
</div>
<div className="mb-4"/>

</div>
</form>
}




const Option_field = () =>{
  return  <div className="flex flex-row jusitfy-between mx-auto">
    <label className="text-gray-600"> familiar  </label>
    <input
      type="radio"
      className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 text-gray-300"
      value="excellent"
      name="excellent"
    />
    <label className="text-gray-600"> good </label>
    <input
      type="radio"
      className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
      value="good"
      name="good"
    />
    <label className="text-gray-600"> average </label>
    <input
      type="radio"
      className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
      value="average"
      name="average"
    />
    <label className="text-gray-600"> below average </label>
    <input
      type="radio"
      className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
      value="below average"
      name="below average"
    />
    <label className="text-gray-600"> poor </label>
    <input
      type="radio"
      className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
      value=" poor"
      name=" poor"
    />
    <label className="text-gray-600"> very poor  </label>
    <input
      type="radio"
      className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
      value=" very poor "
      name=" very poor "
    />
  </div>
}


