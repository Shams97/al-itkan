import React, { useState, useContext } from "react";
import { FormInput, Button,R_link, check_job_id } from "../App";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import { Context } from "../store"
import Radio from './radio'



export const Technical_skills = () => {
  const [show, setShow] = useState([]);
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);
  const [state, setState] = useContext(Context)
  const rfields = ["skill_0_level","skill_1_level", "business_correspondence_skill_level", "effective_communication_skill_level",
  "customer_service_skill_level",
  "team_work_skill_level",
  "Internet_and_research_skill_level",
  "ms_office_and_outlook_skill_level",
  "office_machine_skill_level",
  "typing_skill_level",
  "time_management_skill_level",
  "attention_to_detail_level",
  "goal_oriented_skill_level",
  "multi_tasking_skill_level",
  "follow_up_skill_level",
  "employee_relation_skill_level",
  "supervision_skill_level",
  "relationship_building_skill_level",
  "time_management_skill_level",
  "research_information_gathering_skill_level",
  "medical_product_knowledge_skill_level",
  "business_communication_skill_level",
  "client_engagement_skill_level",
  "sales_presentations_demos_skill_level",
  "contract_negotiation_skill_level",
  "closing_skills_skill_level",
  "self_motivated_ambitious_skill_level",
  "adaptability_skill_level",
  "responsibility_skill_level",
  "goal_oriented_skill_level",
  "passionate_about_selling_skill_level",

]

  check_job_id(state, setState)

  return (
    <div className="lg:w-5/6 md:w-5/6  rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8  sm:w-full">
      <h3 id="page_title" className="my-8 text-2xl"> Technical Skills</h3>
      <div className="flex  flex-col">
        <p className="my-4"> Write down what you good at and how much </p>

        <div className="flex flex-row ml-4 my-4 flex-wrap">
          <FormInput placeholder="Your technical skills" name="skill_0_Desc"/>
          <div className="flex flex-row jusitfy-between mx-auto mt-4">
            <Radio name="skill_0_level" ops={['Not Familiar', 'Beginner', 'Intermediate',
            'Advanced', 'Expert']}/>
          </div>
        </div>

        <div className="flex flex-row ml-4 my-4 flex-wrap">
          <FormInput placeholder="Your technical skills" name="skill_1_Desc"/>
          <div className="flex flex-row jusitfy-between mx-auto mt-4">
            <Radio name="skill_1_level" ops={['Not Familiar', 'Beginner', 'Intermediate',
            'Advanced', 'Expert']}/>
          </div>
        </div>

        {show.map((input, index) => {
         let n = index + 2;
          return (
            <div className="flex flex-row ml-4 my-4 flex-wrap" key={index}>
              <FormInput placeholder="Your technical skills" name={"skill_"+ n +"_Desc"}/>
              <div className="flex flex-row jusitfy-between mx-auto mt-4">
                <Radio name={"skill_"+ n +"_level"} ops={['Not Familiar', 'Beginner', 'Intermediate',
                'Advanced', 'Expert']}/>
              </div>
            </div>
          );
        })}

        <div className="flex justify-around flex-row mt-8 ">
        <p className="text-red-400"> Add more technical skills </p>

          {hideNext ? null :(
            <Operations
              onClick={() => {
                setShow([...show, {}]);
                setHidePrev(false)
                setHideNext(show.length == 3 ? true: false);
              }}
              operation="+" />
          )}
          {hidePrev ? null : (
            <Operations
              onClick={() => {
                setShow(show.slice(0, show.length - 1));
                setHidePrev(show.length == 1 ? true : false)
                setHideNext(false)
                let last_skill = show.length + 1 
                delete state['data']['skill_'+ last_skill +'_Desc']
                delete state['data']['skill_' + last_skill + '_level']
                setState(state)
              }}
              operation="-"
            />
          )}
        </div>
      </div>

      <div className="mb-4" />

<Admin_Skills/>
<div className="mb-4" />
<Sales_Skills/>

      <div className="flex justify-around flex-row mt-8">
        <Link to="/education">
          <Button value="Previous" />
        </Link>
        <R_link route="/employment" fields={rfields} value="Next"/>
      </div>
      <div className="mb-4" />
    </div>
  );
};

export default function Admin_Skills() {
  const [state, setState] = useContext(Context)
  check_job_id(state, setState)

  return (
    <div className="mx-auto mt-10 lg:p-8 md:p-8 sm:p-4">
      <h3 className="my-8 text-2xl">Adminstration Skills</h3>
      <div className="flex  flex-col m-2">

        <OptionField name="Business correspondence"
        logic_name="business_correspondence_skill_level"/>

        <OptionField name="Effective communication"
        logic_name="effective_communication_skill_level"/>

        <OptionField name="Customer service"
        logic_name="customer_service_skill_level"/>

        <OptionField name="Team work"
        logic_name="team_work_skill_level"/>

        <OptionField name="Internet and research"
        logic_name="Internet_and_research_skill_level"/>

        <OptionField name="Microsoft office and outlook"
        logic_name="ms_office_and_outlook_skill_level"/>

        <OptionField name="Office machines and equipment"
        logic_name="office_machine_skill_level"/>

        <OptionField name="Typing"
        logic_name="typing_skill_level"/>

        <OptionField name="Time management and prioritizing"
        logic_name="time_management_skill_level"/>

        <OptionField name="Attention to details"
        logic_name="attention_to_detail_level"/>

        <OptionField name="Goal oriented"
        logic_name="goal_oriented_skill_level"/>

        <OptionField name="Multi tasking"
        logic_name="multi_tasking_skill_level"/>

        <OptionField name="Follow up"
        logic_name="follow_up_skill_level"/>

        <OptionField name="Employee relation"
        logic_name="employee_relation_skill_level"/>

        <OptionField name="Supervision"
        logic_name="supervision_skill_level"/>

      </div>
    
    </div>
  );
}

export const Sales_Skills = () => {
  const [state, setState] = useContext(Context)
  check_job_id(state, setState)
  
  return (
      <div className="mx-auto mt-10 lg:p-8 md:p-8 sm:p-4" >
        <h3 className="my-8 text-2xl">Sales Skills</h3>
        <div className="flex  flex-col m-2">

          <OptionField name="Relationship building"
          logic_name="relationship_building_skill_level"/>

          <OptionField name="Time management"
          logic_name="time_management_skill_level"/>

          <OptionField name="Research / Information gathering"
          logic_name="research_information_gathering_skill_level"/>

          <OptionField name="Medical product knowledge"
          logic_name="medical_product_knowledge_skill_level"/>

          <OptionField name="Business communication"
          logic_name="business_communication_skill_level"/>

          <OptionField name="client engagement"
          logic_name="client_engagement_skill_level"/>

          <OptionField
            name="Sales presentations / Demos"
            logic_name="sales_presentations_demos_skill_level"/>

          <OptionField name="Contract negotiation"
          logic_name="contract_negotiation_skill_level"/>

          <OptionField name="Closing skills"
          logic_name="closing_skills_skill_level"/>

          <OptionField
            name="Self-motivated / ambitious"
            logic_name="self_motivated_ambitious_skill_level"/>

          <OptionField name="Adaptability"
          logic_name="adaptability_skill_level"/>

          <OptionField name="Responsibility"
          logic_name="responsibility_skill_level"/>

          <OptionField name="Goal oriented"
          logic_name="goal_oriented_skill_level"/>

          <OptionField name="Passionate about selling"
          logic_name="passionate_about_selling_skill_level"/>

        </div>
       
      </div>
    
  );
};

export const Training = () => {
  const [show, setShow] = useState([]);
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);
  const [state, setState] = useContext(Context)
  check_job_id(state, setState)

  return (
      <div className="mx-auto my-10 lg:p-8 md:p-8 sm:p-4">
        <h3 className="my-8 text-2xl"> Training and Certification </h3>
       <div className="border border-gray-300 rounded p-6">
        <div className="flex flex-col my-4 ">
          <FormInput placeholder="Training name" name="t0"/>
          <FormInput placeholder="Year" name="t0_year"/>
          <FormInput placeholder="Awarded by" name="t0_awarded_by"/>
          <FormInput placeholder="Country/city" name="t0_country_city"/>
        
        </div>
       


        {show.map((input, index) => {
          let n = show.length;
          return (
            <div className="flex flex-col my-8" key={index} >
              <FormInput placeholder="Training name " name={"t"+n}/>
              <FormInput placeholder="Year" name={"t"+n +"_year"}/>
              <FormInput placeholder="Awarded by" name={"t"+n +"_awarded_by"}/>
              <FormInput placeholder="Country/City" name={"t"+ n +"_country_city"}/>
            </div>
          );
        })}

        <div className="flex  justify-around flex-row mt-4 ">
           {/* <p className="text-red-400">Add more training and certification</p>  */}
          {hideNext ? null : (<Operations
            onClick={() => {
              setShow([...show, {}]);
              setHideNext(show.length == 4 ? true : false)
              setHidePrev(false);
            }}
            operation="Add more training "
          />)}
          {hidePrev ? null : (
            <Operations
              onClick={() => {
                setShow(show.slice(0, show.length - 1));
                setHidePrev(show.length == 1 ? true : false)
                setHideNext(false)
                let last_index = show.length
                delete state['data']["t"+last_index]
                delete state['data']["t"+last_index +"_year"]
                delete state['data']["t"+last_index +"_awarded_by"]
                delete state['data']["t"+ last_index +"_country_city"]
                setState(state)

              }}
              operation="Remove"
            />
          )}
       </div>
    </div>
        <div className="mb-4" />
      </div>
  );
};

const OptionField = ({name, logic_name}) => {
  logic_name = logic_name == undefined ? name.toLowerCase().split(' ').join('_') : logic_name
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col  flex-wrap justify-between">
      <p className="text-left text-lg   lg:mt-4 md:mt-4 lg:w-2/5 md:w-2/5  sm:w-full  sm:my-10 ">{name}</p>
      <div className="flex flex-row jusitfy-between mx-auto my-4 lg:w-3/5 md:w-3/5 sm:w-full ">
        <Radio name={logic_name}
        ops={['Not Familiar', 'Beginner', 'Intermediate',
        'Advanced', 'Expert']}/>
      </div>
    </div>      
  );
};
