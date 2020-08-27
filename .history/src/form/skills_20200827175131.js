import React, { useState } from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import { Link } from "react-router-dom";
import { Operations } from "./family info";

export const Technical_skills = () => {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Technical Skills</h3>
      <div className="flex  flex-col my-4">
        <p> write down what you good at and how much </p>
        <FormInput
          placeholder="your technical skills "
          name="skill_1_Desc"
        />
        <Option_field htmlFor="skill_1_level"/>

        <FormInput placeholder="your technical skills" name="skill_2_Desc" />
        <Option_field htmlFor="skill_2_level"/>

        {show.map((input, index) => {
         let n = index;
          return (
            <div className="flex flex-col mt-8" key={index}>
              <FormInput placeholder="your technical skills" name={"skill_"+ n++ +"_Desc"}/>
              <Option_field htmlFor={"skill_"+ n++ +"_level"}/>
            </div>
          );
        })}

        <div className="flex  justify-around flex-row mt-4 ">
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
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl">Adminstration skills</h3>
      <div className="flex  flex-col m-2">
       
        <Option_field skill_name= "Business Correspondence"  htmlFor="buisness_corr" />

        <Option_field skill_name= "Effective Communication"  htmlFor="effective_comm" />

        <Option_field skill_name= "Customer Service"  htmlFor="costumer_serv" />


        <Option_field skill_name= "Team Work"  htmlFor="teamwork" />

        <Option_field skill_name= "internet and research"  htmlFor="inter_and_res" />

        <Option_field skill_name="Microsoft Office and Outlook" htmlFor="microsoft_office_and_outlook" />

        <Option_field skill_name="Office Machines and Equipment" htmlFor="office_machines" />

        <Option_field skill_name="Typing" htmlFor="tpying" />

        <Option_field skill_name="Time Management and prioritizing" htmlFor="time_managment_and_prioritizing" />

       <Option_field skill_name="Attention to details" htmlFor="attention_to_detials" />

        <Option_field skill_name="Goal Oriented" htmlFor="goal_oriented" />

        <Option_field skill_name="Multi tasking" htmlFor="multi_tasking" />

        <Option_field skill_name="Follow up" htmlFor="follow_up"/>

        <Option_field skill_name="Employee Relations" htmlFor="employee_relation"/>

        <Option_field skill_name="supervision" htmlFor="supervision" />
      

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
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <form action="POST">
      <div className="max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl">Sales Sales</h3>
        <div className="flex  flex-col m-2">
          <Option_field
            skill_name="Relationship building"
            htmlFor="relationship_and_building"
          />
          <Option_field skill_name="Time management" htmlFor="time_managment" />
          <Option_field
            skill_name="Research / Information gathering"
            htmlFor="research_and_information_gathareing"
          />
          <Option_field
            skill_name="Medical product knowledge"
            htmlFor="medical_prodcuct_knowledge"
          />
          <Option_field
            skill_name="Business communication"
            htmlFor="buisness_communication"
          />
          <Option_field skill_name="client engagement" htmlFor="client_engagement" />
          <Option_field
            skill_name="Sales presentations / Demos"
            htmlFor="sales_presenatitinos_and_demos"
          />
          <Option_field
            skill_name="Contract negotiation"
            htmlFor="contract_negotiotaion"
          />
          <Option_field skill_name="Closing skills" htmlFor="closing_skills" />
          <Option_field
            skill_name="Self-motivated / ambitious"
            htmlFor="Self_motivted_and_ambitious"
          />
          <Option_field skill_name="Adaptability" htmlFor="adaptability" />
          <Option_field skill_name="Responsibility" htmlFor="responsibility" />
          <Option_field skill_name="Goal-oriented" htmlFor="goal_oriented" />
          <Option_field
            skill_name="Passionate about selling"
            htmlFor="passionate_about_selling"
          />
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
    </form>
  );
};

export const Training = () => {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  return (
      <div className=" w-3/4	rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 ">
        <h3 className="my-8 text-2xl"> Training and Certification </h3>
       
        <div className="flex flex-col my-4">
          <FormInput placeholder="name" name="t1"/>
          <FormInput placeholder="year" name="t1_year"/>
          <FormInput placeholder="awarded by" name="t1_awarded_by"/>
          <FormInput placeholder="country/city" name="t1_country_city"/>
        </div>
       


        {show.map((input, index) => {
        //  let n = index;
let n =1;
          return (
            <div className="flex flex-col my-8" key={index}>
              <FormInput placeholder={"name"+n++} name={"t"+n++}/>
          <FormInput placeholder="year" name={"t"+n++ +"_year"}/>
          <FormInput placeholder="awarded by" name={"t"+n++ +"_awarded_by"}/>
          <FormInput placeholder="country/city" name={"t"+ n++ +"_country_city"}/>
            </div>
          );
          n++;
        })}

        <div className="flex  justify-around flex-row mt-4 ">
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
              }}
              operation="-"
            />
          ) : null}
       </div>
        <div className="flex justify-around flex-row mt-8">
          <Link to="/sales_skills">
            <Button value="Previous" />
          </Link>
          <Link to="/emploment">
            <Button value="Next" />
          </Link>
        </div>
        <div className="mb-4" />
      </div>
  );
};

const Option_field = ({name, htmlFor, skill_name }) => {
  return (      <div className="flex  flex-col m-2">
   <p className="text-center mt-4">{skill_name}</p>
    <div className="flex flex-row jusitfy-between mx-auto my-4">
      <input
        type="radio"
        className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 text-gray-300"
        value="not familiar"
        name="not familiar"
      />
      <label htmlFor={htmlFor} className="text-gray-600 whitespace-no-wrap">not familiar</label>

      <input
        type="radio"
        className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
        value="beginner"
        name="beginner"
      />
      <label htmlFor={htmlFor} className="text-gray-600"> beginner </label>

      <input
        type="radio"
        className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
        value="intermediate"
        name="intermediate"
      />
      <label htmlFor={htmlFor} className="text-gray-600"> intermediate </label>

      <input
        type="radio"
        className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
        value="advance"
        name="advance"
      />
      <label htmlFor={htmlFor} className="text-gray-600"> advance</label>

      <input
        type="radio"
        className="checked:bg-gray-900 checked:border-transparent mx-2 mt-2 "
        value=" expert"
        name=" expert"
      />
      <label htmlFor={htmlFor} className="text-gray-600"> expert </label>
    </div>
    </div>
  );
};
