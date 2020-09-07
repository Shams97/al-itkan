import React, { useState, useContext } from "react";
import { FormInput, Button } from "../App";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import { Context } from "../store"
import Radio from './radio'



export const Technical_skills = () => {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  const [state, setState] = useContext(Context)
  
  return (
    <div className="w-auto rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Technical Skills</h3>
      <div className="flex  flex-col my-4">
        <p > write down what you good at and how much </p>

        <div className="flex flex-row ml-4">
          <FormInput placeholder="your technical skills" name="skill_0_Desc"/>
          <div className="flex flex-row jusitfy-between mx-auto">
            <Radio name="skill_0_level" ops={['Not Familiar', 'Beginner', 'Intermediate',
            'Advanced', 'Expert']}/>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <FormInput placeholder="your technical skills" name="skill_1_Desc"/>
          <div className="flex flex-row jusitfy-between mx-auto my-4">
            <Radio name="skill_1_level" ops={['Not Familiar', 'Beginner', 'Intermediate',
            'Advanced', 'Expert']}/>
          </div>
        </div>

        {show.map((input, index) => {
         let n = index + 2;
          return (
            <div className="flex flex-col mt-8" key={index}>
              <FormInput placeholder="your technical skills" name={"skill_"+ n +"_Desc"}/>
              <div className="flex flex-row jusitfy-between mx-auto my-4">
                <Radio name={"skill_"+ n +"_level"} ops={['Not Familiar', 'Beginner', 'Intermediate',
                'Advanced', 'Expert']}/>
              </div>
            </div>
          );
        })}

        <div className="flex justify-around flex-row mt-4 ">
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
                setHide(show.length == 1 ? false : true)
                let last_skill = show.length + 1 
                delete state['data']['skill_'+ last_skill +'_Desc']
                delete state['data']['tech_skills_level_' + last_skill]
                setState(state)
              }}
              operation="-"
            />
          ) : null}
        </div>
      </div>

      <div className="flex justify-around flex-row mt-8">
        <Link to="/education">
          <Button value="Previous" />
        </Link>
        <Link to="/admin_skills">
          <Button value="Next" />
        </Link>
      </div>
      <div className="mb-4" />
    </div>
  );
};

export default function Admin_Skills() {

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl">Adminstration skills</h3>
      <div className="flex  flex-col m-2">

        <OptionField name="Business Correspondence"
        logic_name="business_correspondence_skill_level"/>

        <OptionField name="Effective Communication"
        logic_name="effective_communication_skill_level"/>

        <OptionField name="Customer Service"
        logic_name="customer_service_skill_level"/>

        <OptionField name="Team Work"
        logic_name="team_work_skill_level"/>

        <OptionField name="Internet and Research"
        logic_name="Internet_and_research_skill_level"/>

        <OptionField name="Microsoft Office and Outlook"
        logic_name="ms_office_and_outlook_skill_level"/>

        <OptionField name="Office Machines and Equipment"
        logic_name="office_machine_skill_level"/>

        <OptionField name="Typing"
        logic_name="typing_skill_level"/>

        <OptionField name="Time Management And Prioritizing"
        logic_name="time_management_skill_level"/>

        <OptionField name="Attention to Details"
        logic_name="attention_to_detail_level"/>

        <OptionField name="Goal Oriented"
        logic_name="goal_oriented_skill_level"/>

        <OptionField name="Multi Tasking"
        logic_name="multi_tasking_skill_level"/>

        <OptionField name="Follow Up"
        logic_name="follow_up_skill_level"/>

        <OptionField name="Employee Relation"
        logic_name="employee_relation_skill_level"/>

        <OptionField name="Supervision"
        logic_name="supervision_skill_level"/>

      </div>
      <div className="flex justify-around flex-row mt-10">
        <Link to="/technical">
          <Button value="Previous" />
        </Link>
        <Link to="/sales_skills">
          <Button value="Next" />
        </Link>
      </div>

      <div className="mb-4" />
    </div>
  );
}

export const Sales_Skills = () => {
  
  return (
      <div className="max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl">Sales Skills</h3>
        <div className="flex  flex-col m-2">

          <OptionField name="Relationship Building"
          logic_name="relationship_building_skill_level"/>

          <OptionField name="Time Management"
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

          <OptionField name="Goal Oriented"
          logic_name="goal_oriented_skill_level"/>

          <OptionField name="Passionate about selling"
          logic_name="passionate_about_selling_skill_level"/>

        </div>
        <div className="flex justify-around flex-row mt-10">
          <Link to="/admin_skills">
            <Button value="Previous" />
          </Link>
          <Link to="/training">
            <Button value="Next" />
          </Link>
        </div>
        <div className="mb-4" />
      </div>
    
  );
};

export const Training = () => {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  const [state, setState] = useContext(Context)

  return (
      <div className="mx-auto mt-10 p-8 ">
        <h3 className="my-8 text-2xl"> Training and Certification </h3>
       
        <div className="flex flex-col my-4">
          <FormInput placeholder="training name" name="t0"/>
          <FormInput placeholder="year" name="t0_year" type="number"/>
          <FormInput placeholder="awarded by" name="t0_awarded_by"/>
          <FormInput placeholder="country/city" name="t0_country_city"/>
        
        </div>
       


        {show.map((input, index) => {
          let n = show.length;
          return (
            <div className="flex flex-col my-8" key={index} >
              <FormInput placeholder="training name " name={"t"+n}/>
              <FormInput placeholder="year" name={"t"+n +"_year"} type="number"/>
              <FormInput placeholder="awarded by" name={"t"+n +"_awarded_by"}/>
              <FormInput placeholder="country/city" name={"t"+ n +"_country_city"}/>
            </div>
          );
        })}

        <div className="flex  justify-around flex-row mt-4 ">
           <p className="text-red-400">Add more training and certification</p> 
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
                setHide(show.length == 1 ? false : true)
                let last_index = show.length
                delete state['data']["t"+last_index]
                delete state['data']["t"+last_index +"_year"]
                delete state['data']["t"+last_index +"_awarded_by"]
                delete state['data']["t"+ last_index +"_country_city"]
                setState(state)

              }}
              operation="-"
            />
          ) : null}
       </div>
    
        <div className="mb-4" />
      </div>
  );
};

const OptionField = ({name, logic_name}) => {
  logic_name = logic_name == undefined ? name.toLowerCase().split(' ').join('_') : logic_name
  return (
    <div>
      <p className="text-center mt-4">{name}</p>
      <div className="flex flex-row jusitfy-between mx-auto my-4">
        <Radio name={logic_name}
        ops={['Not Familiar', 'Beginner', 'Intermediate',
        'Advanced', 'Expert']}/>
      </div>
    </div>      
  );
};
