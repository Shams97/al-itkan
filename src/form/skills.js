import React, { useState, useContext } from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import { Context } from "../store"
import Radio from './radio'


export const Technical_skills = () => {
  const [state, setState] = useContext(Context)
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Technical Skills</h3>
      <div className="flex  flex-col my-4">
        <p> write down what you good at and how much </p>

        <div className="flex flex-col mt-8">
          <FormInput placeholder="your technical skills" name="skill_0_Desc"/>
          <div className="flex flex-row jusitfy-between mx-auto my-4">
            <Radio name="skill_0_level" ops={['Intermediate', 'Advance', 'Expert']}/>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <FormInput placeholder="your technical skills" name="skill_1_Desc"/>
          <div className="flex flex-row jusitfy-between mx-auto my-4">
            <Radio name="skill_1_level" ops={['Intermediate', 'Advance', 'Expert']}/>
          </div>
        </div>

        {show.map((input, index) => {
         let n = index + 2;
          return (
            <div className="flex flex-col mt-8" key={index}>
              <FormInput placeholder="your technical skills" name={"skill_"+ n +"_Desc"}/>
              <div className="flex flex-row jusitfy-between mx-auto my-4">
                <Radio name={"skill_"+ n +"_level"} ops={['Intermediate', 'Advance', 'Expert']}/>
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
                setHide(show.length == 3 ? false : true)
                let last_index = show.length
                delete state['data']['tech_skills_name_' + last_index]
                delete state['data']['tech_skills_level_' + last_index]
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

        <OptionField name="Business Correspondence"/>

        <OptionField name="Effective Communication"/>

        <OptionField name="Customer Service"/>

        <OptionField name="Team Work"/>

        <OptionField name="Internet and Research"
        logic_name="inter_and_res"/>

        <OptionField name="Microsoft Office and Outlook"
        logic_name="ms_office_and_outlook"/>

        <OptionField name="Office Machines and Equipment"
        logic_name="office_machine"/>

        <OptionField name="Typing"/>

        <OptionField name="Time Management And Prioritizing"
        logic_name="time_managment"/>

        <OptionField name="Attention to Details"
        logic_name="attention_to_detail_level" ignore={true}/>

        <OptionField name="Goal Oriented"/>

        <OptionField name="Multi Tasking"/>

        <OptionField name="Follow Up"/>

        <OptionField name="Employee Relation"/>

        <OptionField name="Supervision"/>

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
        <h3 className="my-8 text-2xl">Sales Skills</h3>
        <div className="flex  flex-col m-2">

          <OptionField name="Relationship Building"/>

          <OptionField name="Time Management"/>

          <OptionField name="Research / Information gathering"
          logic_name="research_information_gathering"/>

          <OptionField name="Medical product knowledge"/>

          <OptionField name="Medical product knowledge"/>

          <OptionField name="Business communication"/>

          <OptionField name="client engagement"/>

          <OptionField
            name="Sales presentations / Demos"
            logic_name="sales_presentations_demos" />

          <OptionField name="Contract negotiation"/>

          <OptionField name="Closing skills"/>

          <OptionField
            name="Self-motivated / ambitious"
            logic_name="self_motivated_ambitious"/>

          <OptionField name="Adaptability"/>

          <OptionField name="Responsibility"/>

          <OptionField name="Goal Oriented"/>

          <OptionField name="Passionate about selling"/>

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
  const [state, setState] = useContext(Context)
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  return (
      <div className=" w-3/4	rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 ">
        <h3 className="my-8 text-2xl"> Training and Certification </h3>
       
        <div className="flex flex-col my-4">
          <FormInput placeholder="training name" name="t0"/>
          <FormInput placeholder="year" name="t0_year"/>
          <FormInput placeholder="awarded by" name="t0_awarded_by"/>
          <FormInput placeholder="country/city" name="t0_country_city"/>
        
        </div>
       


        {show.map((input, index) => {
          let n = show.length;
          return (
            <div className="flex flex-col my-8" key={index} >
              <FormInput placeholder="training name " name={"t"+n}/>
              <FormInput placeholder="year" name={"t"+n +"_year"}/>
              <FormInput placeholder="awarded by" name={"t"+n +"_awarded_by"}/>
              <FormInput placeholder="country/city" name={"t"+ n +"_country_city"}/>
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

const OptionField = ({name, logic_name, ignore}) => {
  logic_name = logic_name == undefined ? name.toLowerCase().split(' ').join('_') : logic_name
  return (
    <div>
      <p className="text-center mt-4">{name}</p>
      <div className="flex flex-row jusitfy-between mx-auto my-4">
        <Radio name={logic_name + (ignore ? "" : "_skill_level")} ops={['Not Familiar', 'Beginner', 'Intermediate',
        'Advance', 'Expert']}/>
      </div>
    </div>      
  );
};
