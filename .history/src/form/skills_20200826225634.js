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
      <h3 className="my-8 text-2xl">Adminstration Skills</h3>
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
      </div>

      <h3 className="my-8 text-2xl">Sales Sales</h3>
      <div className="flex  flex-col m-2">
        <FormInput placeholder="Relationship Building" name="relationship_and_building" />
        <FormInput placeholder="Time Management" name="time_managment" />
        <FormInput placeholder="Research / Information Gathering" name="research_and_information_gathareing" />
        <FormInput placeholder="Medical Product Knowledge" name="medical_prodcuct_knowledge" />
        <FormInput placeholder="Business Communication" name="buisness_communication" />
        <FormInput placeholder="Client Engagement" name="client_engagement" />
        <FormInput placeholder="Sales Presentations / Demos" name="sales_presenatitinos_and_demos" />
        <FormInput placeholder="Contract Negotiation" name="contract_negotiotaion" />
        <FormInput placeholder="Closing Skills" name="closing_skills" />
        <FormInput placeholder="Self-Motivated / Ambitious" name="self_motivted_and_ambitious" />
        <FormInput placeholder="Adaptability" name="adaptability" />
        <FormInput placeholder="Responsibility" name="responsibility" />
        <FormInput placeholder="Goal-Oriented" name="goal_oriented" />
        <FormInput placeholder="Passionate About Selling" name="passionate_about_selling" />
      </div>
    
    </div>
  )
}